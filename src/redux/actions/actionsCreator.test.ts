import ObjectID from "bson-objectid";
import { Player } from "../../Interfaces/PlayerInterface";
import { User } from "../../Interfaces/UserInterface";
import {
  generateRandomPlayer,
  generateRandomPlayers,
} from "../../mocks/playerFactory";
import { generateRandomUser } from "../../mocks/userFactory";
import {
  createPlayerAction,
  deletePlayerAction,
  filterPlayersAction,
  loadPlayersAction,
  loadUserAction,
  updatePlayerAction,
} from "./actionsCreator";

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

describe("Given a delete-player action", () => {
  describe("When it receives an id", () => {
    test("Then it should return an action with type deltePlayer and the id", () => {
      const id: string = ObjectID().toHexString();
      const expectedAction = {
        type: "delete-player",
        id,
      };

      const action = deletePlayerAction(id);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a create-player action", () => {
  describe("When it receives a player", () => {
    test("Then it should return an action with type createPlayer and the player", () => {
      const player: Player = generateRandomPlayer();
      const expectedAction = {
        type: "create-player",
        player,
      };

      const action = createPlayerAction(player);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a update-player action", () => {
  describe("When it receives a player", () => {
    test("Then it should return an action with type update-player and the updated player", () => {
      const player: Player = generateRandomPlayer();
      const expectedACtion = {
        type: "update-player",
        player,
      };

      const action = updatePlayerAction(player);

      expect(action).toEqual(expectedACtion);
    });
  });
});

describe("Given a filterPlayerAction action", () => {
  describe("When it receives the position and the players", () => {
    test("Then it should return an action with type filter-player, the filtered players and the position", () => {
      const players: Player[] = generateRandomPlayers(3);

      const expectedACtion = {
        type: "filter-players",
        position: "portero",
        players,
      };

      const action = filterPlayersAction(expectedACtion.position, players);

      expect(action).toEqual(expectedACtion);
    });
  });
});
