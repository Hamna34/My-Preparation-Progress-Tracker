import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Text,
} from "@chakra-ui/react";

import StatCard from "../components/StatCard";
import TopicProgress from "../components/TopicProgress";
import RevisionDue from "../components/RevisionDue";
import RecentQuestions from "../components/RecentQuestions";

const Dashboard = () => {
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

          <Text
            color="gray.500"
            mt="2"
          >
            Track your interview preparation progress
          </Text>
        </Box>

        <Button colorPalette="blue">
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
          value="42"
          description="Questions added"
        />

        <StatCard
          title="Solved"
          value="24"
          description="57% completed"
        />

        <StatCard
          title="In Progress"
          value="10"
          description="Keep going"
        />

        <StatCard
          title="Current Streak"
          value="7 days"
          description="Great consistency 🔥"
        />
      </Grid>
<Flex
  gap="5"
  mt="6"
  direction={{
    base: "column",
    lg: "row",
  }}
>
  <Box flex="1">
    <TopicProgress/>
  </Box>

  <Box flex="1">
    <RevisionDue/>
  </Box>
</Flex>
<RecentQuestions/>
    </Box>
  );
};

export default Dashboard;