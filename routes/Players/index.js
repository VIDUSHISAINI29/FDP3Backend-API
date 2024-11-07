import express from "express"
import pkg from "duckdb";
 
const app = express();
app.use(express.json());

import playersInfoRoute from "./getPlayersInfoRoutes.js"

app.use('/players-data', playersInfoRoute)

export default app;