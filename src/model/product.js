import {pool} from '../database/database.js'

export const getProduct = (req) => {
  return new Promise((resolve, reject) => {
    console.log("💙"+req);
    pool.query(`SELECT * FROM products where title = '${req}'`, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}
