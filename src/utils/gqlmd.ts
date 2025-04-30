// eslint-disable-next-line @typescript-eslint/no-require-imports
const gqlmd = require('graphql-markdown');
import * as fs from 'fs/promises';
import * as path from 'path';
import { exec } from 'child_process';
import { getLogger } from './logger';

export async function docRender(dirPath: string, files: string[]) {
    return files.map((file) => execRender(dirPath, file));
}

export async function execRender(dirPath: string, filePath: string) {
    const TAG = '[GqlmdExecRender]';
    const logger = getLogger();
    // schema檔名
    const schemaBaseName = path.basename(filePath, path.extname(filePath));
    // 文件路徑
    const docFilePath = path.join(dirPath, `${schemaBaseName}-doc.md`);

    // graphql-markdown schema.gql > doc.md
    exec(`graphql-markdown ${filePath} > ${docFilePath}`, (error) => {
        if (error) {
            logger.error(TAG, error);
            throw error;
        }
    });

    logger.info(TAG, `file(${filePath}) render exec finish`);
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
