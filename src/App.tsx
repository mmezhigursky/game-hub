import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      gridTemplateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem gridArea="nav" bg="red.500">
        nav
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
