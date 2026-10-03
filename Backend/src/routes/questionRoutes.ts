import { Router } from "express";
import { createQuestion, getQuestionById, getQuestions } from "../controllers/questiosController.js";
import { deleteQuestion, updateQuestion } from "../controllers/updateQuestionsController.js";

const router = Router();

router.post("/", createQuestion);
router.get("/",getQuestions)
router.get("/:id", getQuestionById);
router.put("/:id", updateQuestion);
router.delete("/:id",deleteQuestion)
export default router;