import express from 'express';
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'

import store from "./routes/store.js"
import product from "./routes/product.js"
const app = express();

const PORT= process.env.PORT || 8080
const HOST= process.env.HOST ||'localhost'

app.use(cors({
  origin: process.env.CORS, 
}));


app.get('/api',(req,res)=>{
  res.json({msg:"API is working.."})
})

app.use('/api/store',store)
app.use('/api/product',product)


app.listen(PORT,HOST, () => {
  console.log(`listening on port ${PORT}`)
})
