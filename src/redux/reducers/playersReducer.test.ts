import { generateRandomPlayers } from "../../mocks/playerFactory";
import playersReducer from "./playersReducer";

describe("Given a playersReducer reducer", () => {
  describe("When it receives a list of players in the action with type loadPlayers", () => {
    test("Then it should return the list of players in the action", () => {
      const expectedPlayers = [
        {
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
        },
        {
          name: "Messi",
          number: 7,
          goals: 12,
          assists: 4,
          yellowCards: 4,
          redCards: 0,
          totalMatches: 21,
          position: "Alero",
          photo: "photo.jpg",
          id: "1",
        },
      ];
      const initialPlayers = [
        {
          name: "",
          number: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
          totalMatches: 0,
          position: "",
          photo: "",
          id: "",
        },
      ];
      const action = {
        type: "load-players",
        players: expectedPlayers,
      };

      const newPlayers = playersReducer(initialPlayers, action);

      expect(newPlayers).toEqual(expectedPlayers);
    });
  });

  describe("When it doesn't receives any playres and action", () => {
    test("Then it should return the initialPlayers array", () => {
      const newPlayers = playersReducer();

      expect(newPlayers).toEqual([]);
    });
  });

  describe("When it receives a list of players and a delete-player action with a player id", () => {
    test("Then it should delete the player with the id from the list of players", () => {
      const players = generateRandomPlayers(3);
      const deleteAction = {
        type: "delete-player",
        id: players[1].id,
      };

      const newPlayers = playersReducer(players, deleteAction);

      expect(newPlayers).toHaveLength(players.length - 1);
    });
  });
});
