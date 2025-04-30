// index.mjs

import * as fs from 'fs/promises';
import path from 'path';
import express from 'express';
import { buildSchema, introspectionFromSchema } from 'graphql';
import { express as voyagerMiddleware  } from 'graphql-voyager/middleware';
import { createHandler } from 'graphql-http/lib/use/express';

const App = express();
export async function builder(dirPath: string, files: string[]){
    return Promise.all (
        files.map(async (filePath) => {
            // schema檔名
            const schemaBaseName = path.basename(filePath, path.extname(filePath));
            // 讀取 .gql 檔案
            const sdl = await fs.readFile(filePath, 'utf8');

            // api 路徑
            const dirSplits = dirPath.split('/');
            const apiPath = `/${dirSplits[dirSplits.length -1]}`;
            const graphqlApiPath = apiPath + '/graphql';
            const voyagerApiPath = apiPath + '/voyager';

            // 建立 GraphQL Schema
            const schema = buildSchema(sdl);
            
            App.use(graphqlApiPath, createHandler({ schema }));

            // 設定 Voyager 中介軟體
            App.use(
                voyagerApiPath,
                voyagerMiddleware({
                    endpointUrl: graphqlApiPath,
                    displayOptions: {
                        sortByAlphabet: true,
                    },
                })
            );

            console.log(`${voyagerApiPath} built.`)
        })
    )
}

export function start() {
    const PORT = 4000;
    // 啟動伺服器
    App.listen(PORT, () => {
        console.log(`🚀 Voyager is running at http://localhost:${PORT}`);
    });
}
