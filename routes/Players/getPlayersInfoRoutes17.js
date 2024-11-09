import {Router} from "express"
import {getPlayersInfo17} from "../../controllers/getPlayersInfo17Controller.js"

const router = Router();
router.get('/', getPlayersInfo17)
export default router;