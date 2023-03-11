import express from 'express';
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'

import store from "./routes/store.js"
import product from "./routes/product.js"
const app = express();

const PORT= process.env.PORT || 8080

app.use(cors({
  origin: 'http://localhost:3000', // Replace with your React app's domain
}));


app.get('/api',(req,res)=>{
  res.json({msg:"API is working.."})
})

app.use('/api/store',store)
app.use('/api/product',product)


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
