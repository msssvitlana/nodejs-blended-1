import { createFakeProduct } from '../utils/createFakeProduct.js';
import { readFile } from 'fs/promises';
import { PATH_DB } from '../constants/products.js';

export const getProductsByMinPrice = async (minPrice) => {
  try {
    const fileData = await readFile(PATH_DB, 'utf-8');
    const products = JSON.parse(fileData);

    const newListProducts = products.filter((p) => p.price >= minPrice);
    return newListProducts;
  } catch (err) {
    console.error('Failed to load products with minPrice:', err);
    return [];
  }
};
getProductsByMinPrice(15);
