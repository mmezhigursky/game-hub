import { Heading } from "@chakra-ui/react";

import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } ${gameQuery.sortOrder || ""} Games`;
  return (
    <Heading as={"h1"} margin={5} fontSize={"5xl"}>
      {heading ? heading : "Games"}
    </Heading>
  );
};

export default GameHeading;
