import { loadPlayersThunk } from "./playersThunk";
import { loadUserThunk } from "./userThunks";

describe("Given a loadPlayersThunk function", () => {
  describe("When it's called", () => {
    test("Then it should dispatch an loadUser action", async () => {
      const dispatch = jest.fn();
      const action = {
        type: "load-players",
        players: [
          {
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
            id: "1",
          },
          {
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
            id: "2",
          },
        ],
      };

      const players = loadPlayersThunk();
      await players(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});
