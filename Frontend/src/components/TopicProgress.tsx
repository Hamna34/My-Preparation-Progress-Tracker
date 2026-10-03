import {
  Box,
  Flex,
  Heading,
  Progress,
  Text,
} from "@chakra-ui/react";

import type { Question } from "../types/questions";

interface TopicProgressProps {
  questions: Question[];
}

const topics = [
  "DSA",
  "JavaScript",
  "React",
  "Node",
  "Express",
  "MongoDB",
  "System Design",
];

const TopicProgress = ({ questions }: TopicProgressProps) => {
  return (
    <Box
      bg="white"
      p="6"
      borderRadius="lg"
      borderWidth="1px"
      borderColor="gray.100"
    >
      <Heading size="md" mb="6">
        Topic Progress
      </Heading>

      {topics.map((topic) => {
        const topicQuestions = questions.filter(
          (question) => question.topic === topic
        );

        const solvedQuestions = topicQuestions.filter(
          (question) => question.status === "Solved"
        );

        const total = topicQuestions.length;
        const solved = solvedQuestions.length;

        const percentage =
          total > 0 ? Math.round((solved / total) * 100) : 0;

        return (
          <Box key={topic} mb="5">
            <Flex justify="space-between" mb="2">
              <Text fontWeight="500">{topic}</Text>

              <Text fontSize="sm" color="gray.500">
                {solved} / {total}
              </Text>
            </Flex>

            <Progress.Root value={percentage}>
              <Progress.Track>
                <Progress.Range />
              </Progress.Track>
            </Progress.Root>

            <Text
              fontSize="xs"
              color="gray.500"
              mt="1"
            >
              {percentage}% completed
            </Text>
          </Box>
        );
      })}
    </Box>
  );
};

export default TopicProgress;