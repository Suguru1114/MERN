import express from 'express';
import dotenv from "dotenv";
import {connectDB} from './config/db.js';

import productRoute from './routes/product.route.js';

dotenv.config();

const app = express();



app.use(express.json());//allows us to use json data in the body of the request(req.body)

app.use("/api/producs", productRoute);

 app.listen(3000, () => {
    connectDB();
    console.log("Server started at http://localhost:3000");

});


