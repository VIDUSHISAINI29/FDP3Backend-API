import {Router} from "express"
import {getPlayersInfo21} from "../../controllers/getPlayersInfo21Controller.js"

const router = Router();
router.get('/', getPlayersInfo21)
export default router;