import express from 'express'
import dotenv from 'dotenv';
import {connectDB} from './config/db.js'
import path from 'path'
import productRouter from './routes/product.route.js';

dotenv.config();

const app = express();
const _dirname = path.resolve();

app.use(express.json());

app.use('/api/products',productRouter);

if(process.env.NODE_ENV==="production"){
app.use(express.static(path.join(_dirname,"/frontend/dist")));

app.get('*',(req,res)=>{
    res.sendFile(path.resolve(_dirname,"frontend","dist","index.html"));
})

}


app.listen(process.env.PORT||5000,()=>{
    connectDB();
    console.log("server started at http://localhost:5000");
})

