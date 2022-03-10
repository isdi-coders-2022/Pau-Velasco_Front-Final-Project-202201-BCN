import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PlayerCard from "./PlayerCard";

describe("Given a PlayerCard component", () => {
  describe("When it's instantiated with a player", () => {
    test("Then it should render the properties of the player", () => {
      const player = {
        name: "Cristiano",
        number: 7,
        goals: 12,
        assists: 4,
        yellowCards: 4,
        redCards: 0,
        totalMatches: 21,
        position: "Alero",
        photo: "photo.jpg",
        id: "1",
      };
      render(
        <BrowserRouter>
          <PlayerCard player={player} actionOnClick={() => {}} />
        </BrowserRouter>
      );

      const findName = screen.getByText(player.name);
      const findNumber = screen.getByText(`DORSAL: ${player.number}`);
      const findGoals = screen.getByText(`GOLES: ${player.goals}`);
      const findAssists = screen.getByText(`ASSISTENCIAS: ${player.assists}`);
      const findYellowCards = screen.getByText(
        `TARJETAS AMARILLAS: ${player.yellowCards}`
      );
      const findRedCards = screen.getByText(
        `TARJETAS ROJAS: ${player.redCards}`
      );
      const findTotalMatches = screen.getByText(
        `PARTIDOS JUGADOS: ${player.totalMatches}`
      );
      const findPosition = screen.getByText(`POSICIóN: ${player.position}`);
      const findPhoto = screen.getByRole("img");

      expect(findName).toBeInTheDocument();
      expect(findNumber).toBeInTheDocument();
      expect(findGoals).toBeInTheDocument();
      expect(findAssists).toBeInTheDocument();
      expect(findYellowCards).toBeInTheDocument();
      expect(findRedCards).toBeInTheDocument();
      expect(findTotalMatches).toBeInTheDocument();
      expect(findPosition).toBeInTheDocument();
      expect(findPhoto).toBeInTheDocument();
    });
  });
});
