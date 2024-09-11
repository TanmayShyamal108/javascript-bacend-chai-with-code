

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieparser from "cookie-parser";

dotenv.config();

const app = express();
app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
        credentials: true

    }
));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieparser())



//routes
import userRoutes from "./routes/user.routes.js";


//routes here
app.use("/users", userRoutes)

export default app