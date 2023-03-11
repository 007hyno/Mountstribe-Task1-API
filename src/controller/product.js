import {getProduct} from "../model/product.js"

export const getProductData = async (req, res,product) => {
  let productName = req.params.product
  console.log("💘"+productName);
  try {
    const data = await getProduct(productName);
    res.status(200).json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};