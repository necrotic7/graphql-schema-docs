import path from 'path';
import * as gqlmd from './utils/gqlmd';
import { getAllSchemaFilePath } from './utils/files';
import * as voyager from './utils/voyager';
import { getLogger } from './utils/logger';

const TAG = '[Main]';
(async function(){
    const basePath = path.join(__dirname, 'project');
    // 取得所有schema
    const schemaFiles = await getAllSchemaFilePath(basePath);

    await Promise.all(
        schemaFiles.map(async ({dirPath, files}) => {
          await Promise.all([
            // 建立md文件
            gqlmd.docRender(dirPath, files),
            // 建立voyager
            voyager.builder(dirPath, files),
          ])
        }
      )
    )
    // 啟動voyager
    voyager.start();
})()
.catch((err) => {
  getLogger().error(TAG, err);
  process.exit(1);
});