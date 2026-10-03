import {
  Badge,
  Box,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

const revisions = [
  {
    title: "useMemo vs useCallback",
    topic: "React",
    due: "Today",
  },
  {
    title: "Two Sum",
    topic: "DSA",
    due: "Tomorrow",
  },
  {
    title: "JavaScript Closures",
    topic: "JavaScript",
    due: "Tomorrow",
  },
];

const RevisionDue = () => {
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
        Revision Due
      </Heading>

      <VStack align="stretch" gap="4">
        {revisions.map((item) => (
          <Flex
            key={item.title}
            justify="space-between"
            align="center"
            gap="4"
          >
            <Box>
              <Text fontWeight="medium">
                {item.title}
              </Text>

              <Text
                fontSize="sm"
                color="gray.500"
              >
                {item.topic}
              </Text>
            </Box>

            <Badge
              colorPalette={
                item.due === "Today"
                  ? "red"
                  : "orange"
              }
            >
              {item.due}
            </Badge>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
};

export default RevisionDue;