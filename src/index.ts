import path from 'path';
import * as gqlmd from './utils/gqlmd';
import { getAllSchemaFilePath } from './utils/files';

(async function(){
    const basePath = path.join(__dirname, 'project');
    // 取得所有schema
    const schemaFiles = await getAllSchemaFilePath(basePath);

    await Promise.all(
        schemaFiles.map(async ({dirPath, files}) => {
          await Promise.all([
            // 建立md文件
            gqlmd.docRender(dirPath, files),
          ])
        }
      )
    )
})()
.then(() => console.log('[Main] all schema generate finish.'))
.catch((err) => console.log(err))
;