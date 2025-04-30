import * as fs from 'fs/promises';
import express from 'express';
import { buildSchema, introspectionFromSchema } from 'graphql';
import { express as voyagerMiddleware  } from 'graphql-voyager/middleware';
import { createHandler } from 'graphql-http/lib/use/express';
import { getLogger } from './logger';

const App = express();
export async function builder(dirPath: string, files: string[]){
    const TAG = '[VoyagerBuilder]';
    const logger = getLogger();
    await Promise.all (
        files.map(async (filePath) => {
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

            logger.info(TAG, `API (${voyagerApiPath}) built.`)
        })
    );
}

export function start() {
    const TAG = '[VoyagerStart]';
    const logger = getLogger();
    const PORT = 4000;
    // 啟動伺服器
    App.listen(PORT, () => {
        logger.info(TAG, `Voyager is running at http://localhost:${PORT}`);
    });
}
