import { Request, Response } from "express";
import Question from "../models/question.js";
export const createQuestion = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const question = await Question.create(req.body);

    res.status(201).json({
      message: "Question created successfully",
      question,
    });
  } catch (error) {
    console.error("Create question error:", error);

    res.status(500).json({
      message: "Failed to create question",
    });
  }
};
export const getQuestions = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const questions = await Question.find().sort({ createdAt: -1 });

    res.status(200).json({
      questions,
    });
  } catch (error) {
    console.error("Get questions error:", error);

    res.status(500).json({
      message: "Failed to fetch questions",
    });
  }
};
export const getQuestionById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const question = await Question.findById(req.params.id);

    if (!question) {
      res.status(404).json({
        message: "Question not found",
      });
      return;
    }

    res.status(200).json({
      question,
    });
  } catch (error) {
    console.error("Get question error:", error);

    res.status(500).json({
      message: "Failed to fetch question",
    });
  }
};