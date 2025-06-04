import express from 'express';
import dotenv from "dotenv";
import {connectDB} from './config/db.js';




import productRoute from './routes/product.route.js';

dotenv.config();




const app = express();
const PORT = process.env.PORT  || 3000;   


import cors from 'cors';


app.use(express.json());//allows us to use json data in the body of the request(req.body)

app.use("/api/products", productRoute); 

 app.listen(PORT, () => {
    connectDB();
console.log(`Server started at http://localhost:${PORT}`);

});


app.get('/', (req, res) => {
  res.send('API is running...');
});