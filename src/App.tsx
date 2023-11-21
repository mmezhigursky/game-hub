import { Grid, GridItem, Show, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      gridTemplateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem gridArea="nav">
        <NavBar />
        <Text>nav</Text>
      </GridItem>
      <Show above="lg">
        <GridItem gridArea="aside" bg="black">
          aside
        </GridItem>
      </Show>
      <GridItem gridArea="main" bg="coral">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
