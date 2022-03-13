import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/main-page" />} />
        <Route path="/main-page" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
