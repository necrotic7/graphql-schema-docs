import path from 'path';
import { execRender } from './utils/gqlmd';
import { getAllSchemaFilePath } from './utils/files';

(async function(){
  const basePath = path.join(__dirname, 'project');
  // 取得所有schema
  const schemaFiles = await getAllSchemaFilePath(basePath);
  // 執行md文件建立
  await Promise.all(
    schemaFiles.map(async ({dirPath, files}) => 
      files.map(file => execRender(dirPath, file))
    )
  );
})()
.then(() => console.log('all schema generate finish.'))
.catch((err) => console.log(err))
;