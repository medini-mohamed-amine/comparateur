const { Router } = require("express")
const controller = require('../controller');

const router = Router();

router.get("/", controller.getAvis);
router.get("/:idavis",controller.getAvisById);
router.post("/", controller.addAvis);
router.delete("/:idavis", controller.removeAvis);




module.exports = router;