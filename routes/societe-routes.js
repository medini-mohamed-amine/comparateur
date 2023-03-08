const { Router } = require("express")
const controller = require('../controller');

const router = Router();

router.get("/", controller.getSocietes);
router.get("/:idsociete",controller.getSocietesById);
router.post("/", controller.addSociete);
router.put("/:idsociete", controller.updateSociete);
router.delete("/:idsociete", controller.removeSociete);




module.exports = router;