import { PATH_DB, PATH_FILES_DIR } from '../constants/products.js';
import { readFile, writeFile } from 'fs/promises';
import path from 'node:path';

const createProductsFiles = async () => {
  const fileData = await readFile(PATH_DB, 'utf-8');
  const currentProducts = JSON.parse(fileData);

  for (const product of currentProducts) {
    const fileName = `${product.name.toLocaleLowerCase().replace(/\s+/g, '-')}.json`;
    const newPath = path.join(PATH_FILES_DIR, fileName);
    console.log({
      fileName,
      newPath,
    });

    await writeFile(newPath, JSON.stringify(product, null, 2));
  }
};
createProductsFiles();
