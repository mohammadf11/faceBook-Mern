//1:46:18

import express from "express";
import "dotenv/config";
import { connectDB } from "./config/dbConfig.js";
import mongoose from "mongoose";
import userRoutes from "./routes/api/userRoutes.js";


const app = express();
const PORT = process.env.PORT || 4000
connectDB();
app.use(express.json())
app.use('/user', userRoutes)




mongoose.connection.once("open", () => {
    console.log('connected to mongoDB')
    app.listen(PORT, console.log(`Server running on PORT ${PORT}`));

})

// client id = 
// client server =  