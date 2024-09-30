import { Stack } from "@mui/material";
import GridCards from "./gridCards";

const Home = () => {
  return (
    <Stack width="100vw" height="100vh" py={7} overflow="auto">
      <GridCards />
    </Stack>
  );
};

export default Home;
