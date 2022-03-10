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
        players: ["6229c27236ee9c9c2b458879", "6229c27736ee9c9c2b45887e"],
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
