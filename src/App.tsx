import { Route, Routes } from "react-router-dom";
import PlayerCard from "./components/PlayerCard/PlayerCard";

const player = {
  name: "Cristiano",
  number: 7,
  goals: 21,
  assists: 3,
  yellowCards: 4,
  redCards: 1,
  totalMatches: 21,
  position: "Alero",
  photo:
    "https://img.uefa.com/imgml/TP/players/1/2022/324x324/63706.jpg?imwidth=36",
};

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PlayerCard
            actionOnClick={() => {
              console.log("basura");
            }}
            player={player}
          />
        }
      />
    </Routes>
  );
}

export default App;
