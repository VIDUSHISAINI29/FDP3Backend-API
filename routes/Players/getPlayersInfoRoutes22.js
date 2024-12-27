import {Router} from "express"
import {getPlayersInfo22} from "../../controllers/getPlayersInfo22Controller.js"

const router = Router();
router.get('/', getPlayersInfo22)
export default router;