// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import mongoose from 'mongoose';
import express from 'express'; 
import {connectDB} from "./db/index.js";

dotenv.config({
    path: './.env'
})
const app = express();

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
    console.log(`⚙️ Server is running at port : ${process.env.PORT}`);

    })
})
.catch((err)=>{
    console.log("MONGO ka connection dooobara se fail !!!!",err)
})

// connectDB()
// .then(() => {
//     app.listen(process.env.PORT || 8000, () => {
//         console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
//     })
// })
// .catch((err) => {
//     console.log("MONGO db connection failed !!! ", err);
// })










/*
import express from "express"
const app = express()
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()

*/