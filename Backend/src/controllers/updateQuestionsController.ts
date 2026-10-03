import { Request, Response } from "express";
import Question from "../models/question.js";

export const updateQuestion = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const question = await Question.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!question) {
      res.status(404).json({
        message: "Question not found",
      });
      return;
    }

    res.status(200).json({
      message: "Question updated successfully",
      question,
    });
  } catch (error) {
    console.error("Update question error:", error);

    res.status(500).json({
      message: "Failed to update question",
    });
  }
};
export const deleteQuestion = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const question = await Question.findByIdAndDelete(req.params.id);

    if (!question) {
      res.status(404).json({
        message: "Question not found",
      });
      return;
    }

    res.status(200).json({
      message: "Question deleted successfully",
    });
  } catch (error) {
    console.error("Delete question error:", error);

    res.status(500).json({
      message: "Failed to delete question",
    });
  }
};