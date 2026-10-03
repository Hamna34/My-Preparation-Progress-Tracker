import axios from "axios";

const API_URL = "http://localhost:5000/api/questions";

export const getQuestions = async () => {
  const response = await axios.get(API_URL);
  return response.data.questions;
};

export const createQuestion = async (questionData: {
  title: string;
  description: string;
  topic: string;
  difficulty: "Easy" | "Medium" | "Hard";
  status: "Not Started" | "In Progress" | "Solved";
}) => {
  const response = await axios.post(API_URL, questionData);

  return response.data.question;
};