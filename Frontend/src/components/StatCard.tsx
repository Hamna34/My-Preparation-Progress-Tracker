import {
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";

interface StatCardProps {
  title: string;
  value: string;
  description: string;
}

const StatCard = ({
  title,
  value,
  description,
}: StatCardProps) => {
  return (
    <Box
      bg="white"
      borderWidth="1px"
      borderColor="gray.200"
      borderRadius="xl"
      p="5"
      shadow="sm"
    >
      <Text
        fontSize="sm"
        color="gray.500"
      >
        {title}
      </Text>

      <Heading
        size="xl"
        mt="2"
      >
        {value}
      </Heading>

      <Text
        fontSize="sm"
        color="gray.500"
        mt="2"
      >
        {description}
      </Text>
    </Box>
  );
};

export default StatCard;