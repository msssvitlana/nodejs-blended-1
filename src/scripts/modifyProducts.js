import { readFile, writeFile } from 'fs/promises';
import { PATH_DB } from '../constants/products.js';

const modifyProducts = async () => {
  const fileData = await readFile(PATH_DB, 'utf-8');
  const currentListProducts = JSON.parse(fileData);
  const newListProducts = currentListProducts.map(
    ({ description, ...rest }) => rest,
  );
  return newListProducts;
};
console.log(await modifyProducts());
