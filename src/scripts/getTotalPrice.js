import { readFile } from 'fs/promises';
import { PATH_DB } from '../constants/products.js';

const getTotalPrice = async () => {
  try {
    const fileData = await readFile(PATH_DB, 'utf-8');
    const newListProducts = JSON.parse(fileData);
    let totalPrice = 0;
    for (const product of newListProducts) {
      totalPrice += Number(product.price);
    }
    return totalPrice;
  } catch (err) {
    console.error();
  }
};
console.log(await getTotalPrice());
