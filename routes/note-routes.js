const { Router } = require("express")
const controller = require('../controller');

const router = Router();

router.get("/", controller.getNotes);
router.get("/:idnote",controller.getNotesById);
router.post("/", controller.addNote);
router.delete("/:idnote", controller.removeNote);




module.exports = router;