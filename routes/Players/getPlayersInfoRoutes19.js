import {Router} from "express"
import {getPlayersInfo19} from "../../controllers/getPlayersInfo19Controller.js"

const router = Router();
router.get('/', getPlayersInfo19)
export default router;