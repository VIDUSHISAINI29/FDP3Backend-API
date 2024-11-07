import {config} from "dotenv";
config();

import express from "express";
import pkg from "duckdb";

import CORS from "cors";

import routes from "./routes/index.js"

const {Database } = pkg;

const app = express();

const allowedOrigin = process.env.FRONTEND_URL.split(',')[0]|| process.env.FRONTEND_URL.split(',')[1] ||process.env.FRONTEND_URL.split(',')[2]
console.log(allowedOrigin);

app.use(
    CORS({
        origin: allowedOrigin,
        credentials:true,
    })
)
const PORT = 4022;

app.use(express.json());

app.use(routes)

app.listen(PORT, () => {
    console.log(`server is running on the port ${PORT}`);
})