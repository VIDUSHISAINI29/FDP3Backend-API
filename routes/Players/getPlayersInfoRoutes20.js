import {Router} from "express"
import {getPlayersInfo20} from "../../controllers/getPlayersInfo20Controller.js"

const router = Router();
router.get('/', getPlayersInfo20)
export default router;