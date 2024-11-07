import express from "express";

const router = express.Router();

import playersRoutesIndex from "./Players/index.js"

router.use('/', playersRoutesIndex)

export default router;