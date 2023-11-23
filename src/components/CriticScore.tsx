import { Badge, Text } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color =
    score > 75 ? "green.500" : score > 50 ? "yellow.500" : "red.500";
  return (
    <Badge
      colorScheme={color}
      fontWeight="bold"
      fontSize="xl"
      paddingX={2}
      borderRadius={"4px"}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
