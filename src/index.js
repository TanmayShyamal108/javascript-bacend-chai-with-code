import mongoose from "mongoose";
import { connectDB } from "../src/db/db.js";
import dotenv from "dotenv";
import app from "./app.js";
dotenv.config();

connectDB()
    .then(
        () => app.listen(process.env.PORT || 8000, () => console.log(`listening on port ${process.env.PORT || 8000}`))
    )
    .catch((err) => console.log("DB connection error", err))


/*
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";


const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }))

    (async () => {

        try {
            await mongoose.connect(`${process.env.CONNECTION_STRING}`);
            app.on('error', (err) => console.log(err))
            console.log("connected to db")

            app.listen(process.env.PORT, () => console.log("listening on port 5000"))
        }
        catch (err) {
            console.log(err)
        }
    })()


*/