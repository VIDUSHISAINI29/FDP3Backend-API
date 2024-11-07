import {Router} from "express"
import {getPlayersInfo} from "../../controllers/getPlayersInfoController.js"

const router = Router();
router.get('/', getPlayersInfo)
export default router;