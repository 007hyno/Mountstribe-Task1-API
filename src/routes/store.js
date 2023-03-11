import express from 'express'
import { getData } from '../controller/store.js';
const store = express.Router();

store.get('/',getData)



export default store;