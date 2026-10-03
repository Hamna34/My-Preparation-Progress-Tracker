import express from "express";
import cors from "cors";
import questionRoutes from "./routes/questionRoutes.js";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    message: "Interview Prep Tracker API is running",
  });
});
app.use("/api/questions",questionRoutes)

export default app;