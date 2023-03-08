const { Router } = require("express")
const controller = require('../controller');

const router = Router();

router.get("/", controller.getQuestions);
router.get("/:idquestion",controller.getQuestionsById);
router.post("/", controller.addQuestion);
router.delete("/:idquestion", controller.removeQuestion);




module.exports = router;