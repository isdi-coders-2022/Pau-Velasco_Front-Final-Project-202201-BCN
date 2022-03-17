import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../redux/store";
import MainPage from "./MainPage";

describe("Given a MainPage page", () => {
  describe("When it's rendered", () => {
    test("Then it should display a list of players", async () => {
      const renderedPlayers = [
        {
          name: "Cristiano",
          number: 7,
          goals: 21,
          assists: 3,
          yellowCards: 4,
          redCards: 9,
          totalMatches: 21,
          position: "Alero",
          photo:
            "https://img.uefa.com/imgml/TP/players/1/2022/324x324/63706.jpg?imwidth=36",
          id: "1",
        },
        {
          name: "Messi",
          number: 10,
          goals: 43,
          assists: 2,
          yellowCards: 6,
          redCards: 1,
          totalMatches: 24,
          position: "Cierre",
          photo:
            "https://img.uefa.com/imgml/TP/players/1/2022/324x324/63706.jpg?imwidth=36",
          id: "2",
        },
      ];

      render(
        <BrowserRouter>
          <Provider store={store}>
            <MainPage />
          </Provider>
        </BrowserRouter>
      );

      const findCristianoName = await screen.findByText(
        renderedPlayers[0].name
      );
      const findCristianoNumber = await screen.findByText(
        `DORSAL: ${renderedPlayers[0].number}`
      );
      const findMessiName = await screen.findByText(renderedPlayers[1].name);
      const findMessiGoals = await screen.findByText(
        `GOLES: ${renderedPlayers[0].goals}`
      );

      expect(findCristianoName).toBeInTheDocument();
      expect(findMessiName).toBeInTheDocument();
      expect(findCristianoNumber).toBeInTheDocument();
      expect(findMessiGoals).toBeInTheDocument();
    });
  });
});
