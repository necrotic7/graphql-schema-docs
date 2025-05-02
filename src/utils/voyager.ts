import * as fs from 'fs/promises';
import express from 'express';
import { buildSchema } from 'graphql';
import { express as voyagerMiddleware } from 'graphql-voyager/middleware';
import { createHandler } from 'graphql-http/lib/use/express';
import { getLogger } from './logger';
import { EnumRouterType, TRouter } from '../types/types';

export async function builder(
    app: express.Express,
    dirName: string,
    dirPath: string,
    files: string[],
) {
    const TAG = '[VoyagerBuilder]';
    const logger = getLogger();
    const routers: TRouter[] = [];
    await Promise.all(
        files.map(async (filePath) => {
            // 讀取 .gql 檔案
            const sdl = await fs.readFile(filePath, 'utf8');
            // 讀取 schema readme
            let readme = '';
            try {
                readme = await fs.readFile(dirPath + '/README.md', 'utf8');
            } catch {
                logger.info(TAG, `${dirPath} missing README.md, skip reading`);
            }

            // api 路徑
            const rootPath = `/${dirName}`;
            const graphqlApiPath = rootPath + '/graphql';
            const voyagerPath = rootPath + '/voyager';

            // 建立 GraphQL Schema
            const schema = buildSchema(sdl);

            app.use(graphqlApiPath, createHandler({ schema }));

            // 設定 Voyager 中介軟體
            app.use(
                voyagerPath,
                voyagerMiddleware({
                    endpointUrl: graphqlApiPath,
                    displayOptions: {
                        sortByAlphabet: true,
                    },
                }),
            );

            routers.push({
                type: EnumRouterType.VOYAGER,
                path: voyagerPath,
                description: readme,
            });

            logger.info(TAG, `route (${voyagerPath}) built`);
        }),
    );
    return routers;
}
