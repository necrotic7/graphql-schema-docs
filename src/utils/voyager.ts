import * as fs from 'fs/promises';
import express from 'express';
import { buildSchema } from 'graphql';
import { express as voyagerMiddleware } from 'graphql-voyager/middleware';
import { createHandler } from 'graphql-http/lib/use/express';
import { getLogger } from './logger';
import path from 'path';
const App = express();

const Routers: {
    method: string;
    path: string;
    description: string;
}[] = [];

export async function builder(dirPath: string, files: string[]) {
    const TAG = '[VoyagerBuilder]';
    const logger = getLogger();
    await Promise.all(
        files.map(async (filePath) => {
            // 讀取 .gql 檔案
            const sdl = await fs.readFile(filePath, 'utf8');
            // 讀取 schema readme
            let readme = '';
            try {
                readme = await fs.readFile(dirPath + '/README.md', 'utf8');
            } catch {
                logger.info(`${dirPath}沒有README.md，略過讀取`);
            }

            // api 路徑
            const dirSplits = dirPath.split('/');
            const rootPath = `/${dirSplits[dirSplits.length - 1]}`;
            const graphqlApiPath = rootPath + '/graphql';
            const voyagerPath = rootPath + '/voyager';

            // 建立 GraphQL Schema
            const schema = buildSchema(sdl);

            App.use(graphqlApiPath, createHandler({ schema }));

            // 設定 Voyager 中介軟體
            App.use(
                voyagerPath,
                voyagerMiddleware({
                    endpointUrl: graphqlApiPath,
                    displayOptions: {
                        sortByAlphabet: true,
                    },
                }),
            );

            Routers.push({
                method: '[GET]',
                path: voyagerPath,
                description: readme,
            });

            logger.info(TAG, `route (${voyagerPath}) built.`);
        }),
    );
}

export function start() {
    const TAG = '[VoyagerStart]';
    const logger = getLogger();
    const PORT = 4000;
    setHomePage();
    // 啟動伺服器
    App.listen(PORT, () => {
        logger.info(TAG, `Voyager is running at http://localhost:${PORT}`);
    });
}

function setHomePage() {
    // 讀取 EJS 檔案位置
    App.set('views', path.join(__dirname, '../views'));
    // 設定 EJS 當模板引擎
    App.set('view engine', 'ejs');
    App.get('/', (req, res) => {
        res.render('home', {
            tableData: JSON.stringify(Routers),
        });
    });
}
