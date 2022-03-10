import { User } from "../../Interfaces/UserInterface";
import { loadUserAction } from "./actionsCreator";

describe("Given a load user action", () => {
  describe("When it receives a user", () => {
    test("Then it should return an action type loadUser", () => {
      const user: User = {
        username: "pau",
        password:
          "$2b$10$jWXZKWhzU3CqtNXfah4LNuc0p/tA.WnwuCaFYlTVMgkzS399zLxoq",
        teamName: "pau",
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
            id: "6229c27236ee9c9c2b458879",
          },
          {
            name: "Messi",
            number: 7,
            goals: 21,
            assists: 3,
            yellowCards: 4,
            redCards: 1,
            totalMatches: 21,
            position: "Alero",
            photo:
              "https://img.uefa.com/imgml/TP/players/1/2022/324x324/63706.jpg?imwidth=36",
            id: "6229c27736ee9c9c2b45887e",
          },
        ],
        id: "622719062b2a023745861d52",
      };

      const expectedAction = {
        type: "load-user",
        user,
      };

      const action = loadUserAction(user);

      expect(action).toEqual(expectedAction);
    });
  });
});
