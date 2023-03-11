import {pool} from '../database/database.js'

export const getAll = () => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM products', (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}
