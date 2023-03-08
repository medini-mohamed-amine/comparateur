const { Router } = require("express")
const controller = require('../controller');

const router = Router();

router.get("/", controller.getReponses);
router.get("/:idreponse",controller.getReponsesById);
router.post("/", controller.addReponse);
router.delete("/:idreponse", controller.removeReponse);




module.exports = router;