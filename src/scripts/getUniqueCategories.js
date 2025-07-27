import { readFile } from 'fs/promises';
import { PATH_DB } from '../constants/products.js';

const getUniqueCategories = async () => {
  try {
    const fileData = await readFile(PATH_DB, 'utf-8');
    const newListProducts = JSON.parse(fileData);
    const uniqueCategoryList = newListProducts.reduce((acc, product) => {
      if (!acc.includes(product.category)) {
        acc.push(product.category);
      }

      return acc;
    }, []);
    return uniqueCategoryList;
  } catch (err) {
    console.error('');
  }
};
console.log(await getUniqueCategories());
