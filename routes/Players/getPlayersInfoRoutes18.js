import {Router} from "express"
import {getPlayersInfo18} from "../../controllers/getPlayersInfo18Controller.js"

const router = Router();
router.get('/', getPlayersInfo18)
export default router;