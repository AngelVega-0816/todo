import { Stack } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/header";
import Footer from "./components/footer";
import Contact from "./pages/contact";
import Team from "./pages/team";
// import useChat from "./components/chat";

function App() {
  return (
    <Stack
      sx={{
        pl: "min(10vw, 120px)",
        pr: "min(10vw, 120px)",
        bgcolor: "#000",
        backgroundImage: "linear-gradient(0, #000000 50%, #0d0d0d 50%)",
        backgroundSize: "4px 4px",
      }}
    >
      <Header />
      <Stack>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:nameProject" element={<Home />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/equipo" element={<Team />} />
        </Routes>
        {/* <div>
          hi {hasLoaded ? "yes" : "no"}
          conversation: {activeConversation}
          <button onClick={openHandler}>click me to open</button>
          <button onClick={closeHandler}>click me to close</button>
        </div> */}
      </Stack>
      <Footer />
    </Stack>
  );
}

export default App;
