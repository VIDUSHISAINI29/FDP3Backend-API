import express from "express"
import pkg from "duckdb";
 
const app = express();
app.use(express.json());

import playersInfoRoute17 from "./getPlayersInfoRoutes17.js"
import playersInfoRoute18 from "./getPlayersInfoRoutes18.js"
import playersInfoRoute19 from "./getPlayersInfoRoutes19.js"
import playersInfoRoute20 from "./getPlayersInfoRoutes20.js"
import playersInfoRoute21 from "./getPlayersInfoRoutes21.js"
import playersInfoRoute22 from "./getPlayersInfoRoutes22.js"

app.use('/players-data-17', playersInfoRoute17)
app.use('/players-data-18', playersInfoRoute18)
app.use('/players-data-19', playersInfoRoute19)
app.use('/players-data-20', playersInfoRoute20)
app.use('/players-data-21', playersInfoRoute21)
app.use('/players-data-22', playersInfoRoute22)

export default app;