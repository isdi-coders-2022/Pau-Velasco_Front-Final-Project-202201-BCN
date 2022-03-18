import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import CreatePlayer from "./pages/CreatePlayer";
import MainPage from "./pages/MainPage";
import UpdatePlayer from "./pages/UpdatePlayer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/main-page" />} />
        <Route path="/main-page" element={<MainPage />} />
        <Route path="/create-player" element={<CreatePlayer />} />
        <Route path="/main-page/update-player/:id" element={<UpdatePlayer />} />
      </Routes>
    </>
  );
}

export default App;
