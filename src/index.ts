import 'reflect-metadata';
const gqlmd = require('graphql-markdown');
import { promises as fs } from 'fs';
import * as path from 'path';
import fg from 'fast-glob';
import { exec } from 'child_process';

processSchemaFiles()
  .then(() => console.log('all schema generate finish.'))
  .catch((err) => console.log(err))
  ;

async function processSchemaFiles() {
  const basePath = path.join(__dirname, 'project');
  const dirs = await fs.readdir(basePath, { withFileTypes: true });

  for await (const dirent of dirs) {
    if (dirent.isDirectory()) {
      const dirPath = path.join(basePath, dirent.name);
      const files = await fg(`${dirPath}/**.*(gql|graphql)`);
      for (const file of files) {
        await execRender(dirPath, file);
      }
    }
  }
}

async function execRender(dir: string, filePath: string) {
  // schema檔名
  const schemaBaseName = path.basename(filePath, path.extname(filePath));
  // 文件路徑
  const docFilePath = path.join(dir, `${schemaBaseName}-doc.md`);

  // graphql-markdown schema.gql > doc.md
  exec(`graphql-markdown ${filePath} > ${docFilePath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`執行錯誤: ${error}`);
      return;
    }
  });
  
  console.log(`file(${filePath}) render exec finish`);
}

// NOTICE: fileRender版本目前會有格式跑版問題，先以CLI版本為主
async function fileRender(dir: string, filePath: string) {
  // 讀取schema
  const loadedSchema = await gqlmd.loadSchemaJSON(filePath);
  // schema檔名
  const schemaBaseName = path.basename(filePath, path.extname(filePath));
  // 文件路徑
  const docFilePath = path.join(dir, `${schemaBaseName}-doc.md`);

  // 先確認文件是不是已存在，如果存在要先清空
  try{
    await fs.access(docFilePath);
    await fs.writeFile(docFilePath, '')
  }catch(err){}

  // 產生sync printer 給 graphql-markdown
  const printer = (data: string) => {
    (async () => {
      await fs.appendFile(docFilePath, `${data} \n`);
    })()
      .then(() => {})
      .catch((err) => console.log(`dir(${filePath}) print fail: ${err}`))
      ;
  };

  gqlmd.renderSchema(loadedSchema, { printer });
  console.log(`file(${filePath}) render finish`);
}
