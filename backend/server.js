import express from 'express'
import dotenv from 'dotenv';
import {connectDB} from './config/db.js'
import productRouter from './routes/product.route.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/products',productRouter);

app.listen(process.env.PORT||5000,()=>{
    connectDB();
    console.log("server started at http://localhost:5000");
})

