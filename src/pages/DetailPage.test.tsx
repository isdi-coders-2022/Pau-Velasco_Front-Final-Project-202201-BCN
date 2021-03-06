import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../redux/store";
import DetailPage from "./DetailPage";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: "1" }),
}));

const state = {
  players: [
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
  ],
};
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => state.players,
}));

describe("Given a DetailPage page", () => {
  describe("When it's rendered with an id in the url", () => {
    test("Then it should display the letter that corresponds to the id", async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <DetailPage />
          </BrowserRouter>
        </Provider>
      );
      const player = {
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
      };

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
      const findPosition = screen.getByText(`POSICI??N: ${player.position}`);
      const findTrashButton = screen.getByRole("img", {
        name: "trash",
      });
      userEvent.click(findTrashButton);

      expect(findName).toBeInTheDocument();
      expect(findNumber).toBeInTheDocument();
      expect(findGoals).toBeInTheDocument();
      expect(findAssists).toBeInTheDocument();
      expect(findYellowCards).toBeInTheDocument();
      expect(findRedCards).toBeInTheDocument();
      expect(findTotalMatches).toBeInTheDocument();
      expect(findPosition).toBeInTheDocument();
    });
  });
});
