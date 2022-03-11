import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { generateRandomPlayer } from "./mocks/playerFactory";
import MainPage from "./pages/MainPage";

function App() {
  console.log(generateRandomPlayer());
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
