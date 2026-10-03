import mongoose, { Document, Schema } from "mongoose";

export interface IQuestion extends Document {
  title: string;
  description: string;
  topic: string;
  difficulty: "Easy" | "Medium" | "Hard";
  status: "Not Started" | "In Progress" | "Solved";
  notes: string;
  revisionDate?: Date;
  solvedAt?: Date;
}

const questionSchema = new Schema<IQuestion>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    topic: {
      type: String,
      required: true,
    },

    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      default: "Easy",
    },

    status: {
      type: String,
      enum: ["Not Started", "In Progress", "Solved"],
      default: "Not Started",
    },

    notes: {
      type: String,
      default: "",
    },

    revisionDate: {
      type: Date,
    },

    solvedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Question = mongoose.model<IQuestion>("Question", questionSchema);

export default Question;