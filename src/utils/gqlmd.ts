// eslint-disable-next-line @typescript-eslint/no-require-imports
const gqlmd = require('graphql-markdown');
import * as fs from 'fs/promises';
import * as path from 'path';
import { exec } from 'child_process';
import { getLogger } from './logger';
import express from 'express';
import { marked } from 'marked';
import { EnumRouterType, TRouter } from '../types/router';

export async function docRender(
    app: express.Express,
    dirName: string,
    dirPath: string,
    files: string[],
) {
    return await Promise.all(files.map((file) => execRender(app, dirName, dirPath, file)));
}

export async function execRender(
    app: express.Express,
    dirName: string,
    dirPath: string,
    filePath: string,
): Promise<TRouter> {
    const TAG = '[GqlmdExecRender]';
    const logger = getLogger();
    // schema檔名
    const schemaBaseName = path.basename(filePath, path.extname(filePath));
    // 文件檔名
    const docFileName = `${schemaBaseName}-doc.md`;
    // 文件路徑
    const docFilePath = path.join(dirPath, docFileName);

    // graphql-markdown schema.gql > doc.md
    exec(`graphql-markdown ${filePath} > ${docFilePath}`, (error) => {
        if (error) {
            logger.error(TAG, error);
            throw error;
        }
    });

    logger.info(TAG, `file(${filePath}) render exec finish`);

    // 把生成好的文件讀取出來
    const docContent = await fs.readFile(docFilePath, 'utf8');
    const htmlContent = marked(docContent);
    const docPath = `/${dirName}/doc`;
    app.get(docPath, (req, res) => {
        res.render('doc', {
            title: dirName,
            content: htmlContent,
        });
    });
    logger.info(TAG, `route (${docPath}) built`);
    return {
        folder: dirName,
        type: EnumRouterType.DOC,
        path: docPath,
        description: `${dirName} schema markdown file`,
    };
}

// NOTICE: fileRender版本目前會有格式跑版問題，先以CLI版本為主
async function fileRender(dir: string, filePath: string) {
    const TAG = '[GqlmdFileRender]';
    const logger = getLogger();
    // 讀取schema
    const loadedSchema = await gqlmd.loadSchemaJSON(filePath);
    // schema檔名
    const schemaBaseName = path.basename(filePath, path.extname(filePath));
    // 文件路徑
    const docFilePath = path.join(dir, `${schemaBaseName}-doc.md`);

    // 先確認文件是不是已存在，如果存在要先清空
    try {
        await fs.access(docFilePath);
        await fs.writeFile(docFilePath, '');
        logger.info(TAG, `${docFilePath} exist, clear success..`);
    } catch {
        logger.info(TAG, `${docFilePath} not exist, create new..`);
    }

    // 產生sync printer 給 graphql-markdown
    const printer = (data: string) => {
        (async () => {
            await fs.appendFile(docFilePath, `${data} \n`);
        })().catch((err) => {
            logger.error(TAG, `dir(${filePath}) print fail: ${err}`);
            throw err;
        });
    };

    gqlmd.renderSchema(loadedSchema, { printer });
    logger.info(TAG, `file(${filePath}) render finish`);
}
