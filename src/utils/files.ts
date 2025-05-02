import * as fs from 'fs/promises';
import * as path from 'path';
import fg from 'fast-glob';

export async function getAllSchemaFilePath(basePath: string) {
    const dirs = await fs.readdir(basePath, { withFileTypes: true });
    const results = await Promise.all(
        dirs
            .filter((dirent) => dirent.isDirectory())
            .map(async (dirent) => {
                const dirPath = path.join(basePath, dirent.name);
                const files = await fg(`${dirPath}/**/*.{gql,graphql}`);
                const dirSplits = dirPath.split('/');
                const dirName = dirSplits[dirSplits.length - 1];
                return { dirName, dirPath, files };
            }),
    );
    return results;
}
