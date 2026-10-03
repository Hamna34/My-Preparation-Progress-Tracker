export type Difficulty = "Easy" | "Medium" | "Hard";

export type QuestionStatus =
  | "Not Started"
  | "In Progress"
  | "Solved";

export interface Question {
  _id: string;
  title: string;
  description: string;
  topic: string;
  difficulty: Difficulty;
  status: QuestionStatus;
  notes: string;
  revisionDate?: string;
  solvedAt?: string;
  createdAt: string;
  updatedAt: string;
}