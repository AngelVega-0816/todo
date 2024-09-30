import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";

const App = () => {
  return (
    <Box bgcolor="background.paper" height="100vh" width="100vw">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Box>
  );
};

export default App;
