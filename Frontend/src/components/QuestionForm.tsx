import {
  Box,
  Button,
  Field,
  Heading,
  Input,
  NativeSelect,
  Textarea,
} from "@chakra-ui/react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createQuestion } from "../services/Service";

const AddQuestion = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState<
    "Easy" | "Medium" | "Hard"
  >("Easy");

  const [status, setStatus] = useState<
    "Not Started" | "In Progress" | "Solved"
  >("Not Started");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!title || !topic) {
      alert("Please enter title and select a topic");
      return;
    }

    try {
      setLoading(true);

      await createQuestion({
        title,
        description,
        topic,
        difficulty,
        status,
      });

      alert("Question added successfully!");

      navigate("/");
    } catch (error) {
      console.error("Failed to create question:", error);

      alert("Failed to add question");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box maxW="700px">
      <Heading size="lg" mb="2">
        Add Question
      </Heading>

      <Box color="gray.500" mb="8">
        Add a new question to your interview preparation tracker.
      </Box>

      <Box
        bg="white"
        p="6"
        borderRadius="lg"
        borderWidth="1px"
        borderColor="gray.100"
      >
        {/* Title */}
        <Field.Root mb="5">
          <Field.Label>Question Title</Field.Label>

          <Input
            placeholder="e.g. What is React batching?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Field.Root>

        {/* Description */}
        <Field.Root mb="5">
          <Field.Label>Description</Field.Label>

          <Textarea
            placeholder="Describe the question..."
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Field.Root>

        {/* Topic */}
        <Field.Root mb="5">
          <Field.Label>Topic</Field.Label>

          <NativeSelect.Root>
            <NativeSelect.Field
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            >
              <option value="">Select topic</option>
              <option value="DSA">DSA</option>
              <option value="JavaScript">JavaScript</option>
              <option value="React">React</option>
              <option value="Node">Node</option>
              <option value="Express">Express</option>
              <option value="MongoDB">MongoDB</option>
              <option value="System Design">
                System Design
              </option>
            </NativeSelect.Field>

            <NativeSelect.Indicator />
          </NativeSelect.Root>
        </Field.Root>

        {/* Difficulty */}
        <Field.Root mb="5">
          <Field.Label>Difficulty</Field.Label>

          <NativeSelect.Root>
            <NativeSelect.Field
              value={difficulty}
              onChange={(e) =>
                setDifficulty(
                  e.target.value as "Easy" | "Medium" | "Hard"
                )
              }
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </NativeSelect.Field>

            <NativeSelect.Indicator />
          </NativeSelect.Root>
        </Field.Root>

        {/* Status */}
        <Field.Root mb="6">
          <Field.Label>Status</Field.Label>

          <NativeSelect.Root>
            <NativeSelect.Field
              value={status}
              onChange={(e) =>
                setStatus(
                  e.target.value as
                    | "Not Started"
                    | "In Progress"
                    | "Solved"
                )
              }
            >
              <option value="Not Started">
                Not Started
              </option>

              <option value="In Progress">
                In Progress
              </option>

              <option value="Solved">
                Solved
              </option>
            </NativeSelect.Field>

            <NativeSelect.Indicator />
          </NativeSelect.Root>
        </Field.Root>

        <Button
          colorPalette="blue"
          width="full"
          onClick={handleSubmit}
          loading={loading}
        >
          Add Question
        </Button>
      </Box>
    </Box>
  );
};

export default AddQuestion;