import { readFile } from 'fs/promises';
import { PATH_DB } from '../constants/products.js';

const groupProductsByCategories = async () => {
  const fileData = readFile(PATH_DB, 'utf-8');
  const currentProducts = JSON.parse;

  for (const product of currentProducts) {
    const categoryProducts = {};
    const { name, category } = product;
    if (!categoryProducts[category]) {
      categoryProducts[category] = [];
    }
    categoryProducts[category].push(name);
  }
};
console.log(await groupProductsByCategories());

// {
//    category1: [name1, name3, name5],
//    category2: [name2, name7],
//    category3: [name4, name6],
// }
