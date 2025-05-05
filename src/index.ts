import path from 'path';
import * as gqlmd from './utils/gqlmd';
import { getAllSchemaFilePath } from './utils/files';
import * as voyager from './utils/voyager';
import { getLogger } from './utils/logger';
import express from 'express';
import { TRouter } from './types/router';

const TAG = '[Main]';

(async function () {
    const app = express();
    // 讀取 EJS 檔案位置
    app.set('views', path.join(__dirname, './views'));
    // 設定 EJS 當模板引擎
    app.set('view engine', 'ejs');
    const basePath = path.join(__dirname, 'project');
    // 取得所有schema
    const schemaFiles = await getAllSchemaFilePath(basePath);
    const Routers: TRouter[] = [];
    await Promise.all(
        schemaFiles.map(async ({ dirName, dirPath, files }) => {
            const [docRouters, voyagerRouters] = await Promise.all([
                // 建立md文件
                gqlmd.docRender(app, dirName, dirPath, files),
                // 建立voyager
                voyager.builder(app, dirName, dirPath, files),
            ]);

            Routers.push(...docRouters);
            Routers.push(...voyagerRouters);
        }),
    );

    // 設定首頁
    app.get('/', (req, res) => {
        res.render('home', {
            tableData: JSON.stringify(Routers),
        });
    });
    // 啟動express
    const port = 4000;
    app.listen(port, () => getLogger().info(TAG, `app listening on port ${port}`));
})().catch((err) => {
    getLogger().error(TAG, err);
    process.exit(1);
});
