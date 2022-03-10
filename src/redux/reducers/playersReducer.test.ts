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
});
