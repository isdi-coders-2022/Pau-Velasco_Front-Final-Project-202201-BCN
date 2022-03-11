import { Player } from "../../Interfaces/PlayerInterface";
import { User } from "../../Interfaces/UserInterface";
import { generateRandomPlayers } from "../../mocks/playerFactory";
import { generateRandomUser } from "../../mocks/userFactory";
import { loadPlayersAction, loadUserAction } from "./actionsCreator";

describe("Given a load user action", () => {
  describe("When it receives a user", () => {
    test("Then it should return an action type loadUser", () => {
      const user: User = generateRandomUser();

      const expectedAction = {
        type: "load-user",
        user,
      };

      const action = loadUserAction(user);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a load players action", () => {
  describe("When it receives a list of players", () => {
    test("Then it should return an action with type loadPlayers and the list of players", () => {
      const players: Player[] = generateRandomPlayers(2);

      const expectedAction = {
        type: "load-players",
        players,
      };

      const action = loadPlayersAction(players);

      expect(action).toEqual(expectedAction);
    });
  });
});
