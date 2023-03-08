const { Router } = require("express")
const controller = require('../controller');

const router = Router();

router.get("/", controller.getUtilisateurs);
router.get("/:idutilisateur",controller.getUtilisateurById);
router.post("/", controller.addUtilisateur);
router.put("/:idutilisateur", controller.updateUtilisateur);
router.delete("/:idutilisateur", controller.removeUtilisateur);








module.exports = router;


