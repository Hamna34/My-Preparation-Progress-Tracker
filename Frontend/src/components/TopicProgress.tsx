import {
  Box,
  Flex,
  Heading,
  Progress,
  Text,
  VStack,
} from "@chakra-ui/react";

const topics = [
  {
    name: "React",
    progress: 75,
  },
  {
    name: "JavaScript",
    progress: 60,
  },
  {
    name: "DSA",
    progress: 45,
  },
  {
    name: "Node.js",
    progress: 35,
  },
];

const TopicProgress = () => {
  return (
    <Box
      bg="white"
      borderWidth="1px"
      borderColor="gray.200"
      borderRadius="xl"
      p="6"
      shadow="sm"
    >
      <Heading size="md" mb="6">
        Topic Progress
      </Heading>

      <VStack align="stretch" gap="5">
        {topics.map((topic) => (
          <Box key={topic.name}>
            <Flex
              justify="space-between"
              mb="2"
            >
              <Text fontWeight="medium">
                {topic.name}
              </Text>

              <Text
                fontSize="sm"
                color="gray.500"
              >
                {topic.progress}%
              </Text>
            </Flex>

            <Progress.Root
              value={topic.progress}
              size="sm"
            >
              <Progress.Track>
                <Progress.Range />
              </Progress.Track>
            </Progress.Root>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default TopicProgress;