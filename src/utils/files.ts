import { promises as fs } from 'fs';
import * as path from 'path';
import fg from 'fast-glob';

export async function getAllSchemaFilePath(basePath: string) {
    const dirs = await fs.readdir(basePath, { withFileTypes: true });
    const results = await Promise.all(
        dirs
          .filter(dirent => dirent.isDirectory())
          .map(async dirent => {
            const dirPath = path.join(basePath, dirent.name);
            const files = await fg(`${dirPath}/**/*.{gql,graphql}`);
            return { dirPath, files };
          })
    );

    return results;
}