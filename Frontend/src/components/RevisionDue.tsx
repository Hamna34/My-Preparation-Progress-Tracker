import {
  Badge,
  Box,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";

import type { Question } from "../types/questions";

interface RevisionDueProps {
  questions?: Question[];
}

const RevisionDue = ({
  questions = [],
}: RevisionDueProps) => {
  const today = new Date();

  today.setHours(0, 0, 0, 0);

  const revisionQuestions = questions
    .filter((question) => {
      if (!question.revisionDate) {
        return false;
      }

      const revisionDate = new Date(question.revisionDate);

      revisionDate.setHours(0, 0, 0, 0);

      return revisionDate <= today;
    })
    .slice(0, 5);

  return (
    <Box
      bg="white"
      p="6"
      borderRadius="lg"
      borderWidth="1px"
      borderColor="gray.100"
    >
      <Heading size="md" mb="5">
        Revision Due
      </Heading>

      {revisionQuestions.length === 0 ? (
        <Text color="gray.500">
          No revisions due 🎉
        </Text>
      ) : (
        <Box>
          {revisionQuestions.map((question) => (
            <Flex
              key={question._id}
              justify="space-between"
              align="center"
              py="4"
              borderBottomWidth="1px"
              borderColor="gray.100"
              gap="4"
            >
              <Box>
                <Text fontWeight="600">
                  {question.title}
                </Text>

                <Text
                  fontSize="sm"
                  color="gray.500"
                  mt="1"
                >
                  {question.topic}
                </Text>
              </Box>

              <Badge colorPalette="red">
                Due
              </Badge>
            </Flex>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default RevisionDue;