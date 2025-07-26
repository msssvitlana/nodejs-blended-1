import { createFakeProduct } from '../utils/createFakeProduct.js';
import { PATH_DB } from '../constants/products.js';
import { readFile, writeFile } from 'fs/promises';

export const generateProducts = async (number) => {
  try {
    const fileData = await readFile(PATH_DB, 'utf-8');
    const currentProducts = JSON.parse(fileData);
    const newProducts = [];
    for (let i = 0; i < number; i++) {
      newProducts.push(createFakeProduct());
    }

    const updateListproducts = [...currentProducts, ...newProducts];

    await writeFile(
      PATH_DB,
      JSON.stringify(updateListproducts, null, 2),
      'utf-8',
    );
    console.log('Products have been succesfully added.');
  } catch (err) {
    console.error('Failed to generate products:', err);
    throw err;
  }
};
generateProducts(7);
