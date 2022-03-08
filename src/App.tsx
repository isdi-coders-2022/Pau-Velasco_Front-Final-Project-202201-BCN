import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />} />
    </Routes>
  );
}

export default App;
