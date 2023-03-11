import express from 'express'
import { getProductData } from '../controller/product.js';
const product = express.Router();

// product.get('/:product',getProductData)

product.get('/:product', (req, res) => {
  console.log(req.params);
  if (!req.params.product) {
      return res.status(400).json({ error: 'Hospital ID is required' });
    }
  getProductData(req,res)
});

export default product;