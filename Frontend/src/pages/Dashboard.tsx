import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Text,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StatCard from "../components/StatCard";
import TopicProgress from "../components/TopicProgress";
import RevisionDue from "../components/RevisionDue";
import RecentQuestions from "../components/RecentQuestions";

import { getQuestions } from "../services/Service";
import type { Question } from "../types/questions";

const Dashboard = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
const navigate = useNavigate();
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const data = await getQuestions();

        console.log("Questions from MongoDB:", data);

        setQuestions(data);
      } catch (error) {
        console.error("Failed to fetch questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  // Calculate dashboard statistics
  const totalQuestions = questions.length;

  const solvedQuestions = questions.filter(
    (question) => question.status === "Solved"
  ).length;

  const inProgressQuestions = questions.filter(
    (question) => question.status === "In Progress"
  ).length;

  // Calculate solved percentage
  const solvedPercentage =
    totalQuestions > 0
      ? Math.round((solvedQuestions / totalQuestions) * 100)
      : 0;
const handleClick = ()=>
{

}
  return (
    <Box>
      {/* Header */}
      <Flex
        justify="space-between"
        align="center"
        mb="8"
        flexWrap="wrap"
        gap="4"
      >
        <Box>
          <Heading size="lg">
            Good morning, Hamna 👋
          </Heading>

          <Text color="gray.500" mt="2">
            Track your interview preparation progress
          </Text>
        </Box>
<Button
  colorPalette="blue"
  onClick={() => navigate("/add-question")}
>
  + Add Question
</Button>
      </Flex>

      {/* Stats */}
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap="5"
      >
        <StatCard
          title="Total Questions"
          value={String(totalQuestions)}
          description="Questions added"
        />

        <StatCard
          title="Solved"
          value={String(solvedQuestions)}
          description={`${solvedPercentage}% completed`}
        />

        <StatCard
          title="In Progress"
          value={String(inProgressQuestions)}
          description="Keep going"
        />

        <StatCard
          title="Current Streak"
          value="7 days"
          description="Great consistency 🔥"
        />
      </Grid>

      {/* Topic Progress + Revision Due */}
      <Flex
        gap="5"
        mt="6"
        direction={{
          base: "column",
          lg: "row",
        }}
      >
        <Box flex="1">
          <TopicProgress questions={questions} />
        </Box>

        <Box flex="1">
          <RevisionDue questions={questions}/>
        </Box>
      </Flex>

      {/* Recent Questions */}
      <RecentQuestions questions={questions}/>
    </Box>
  );
};

export default Dashboard;