import { Route, Routes } from "react-router-dom";
import PlayerCard from "./components/PlayerCard/PlayerCard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PlayerCard />} />
    </Routes>
  );
}

export default App;
