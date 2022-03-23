import {
  createPlayerThunk,
  deletePlayerThunk,
  filterPlayersThunk,
  loadPlayersThunk,
  updatePlayerThunk,
} from "./playersThunk";

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
          {
            name: "Eva Gleichner",
            number: 10,
            goals: 69,
            assists: 43,
            yellowCards: 14,
            redCards: 9,
            totalMatches: 37,
            position: "Alero",
            photo: "http://placeimg.com/640/480",
            id: "3",
          },
          {
            name: "Phyllis Stoltenberg",
            number: 88,
            goals: 26,
            assists: 19,
            yellowCards: 8,
            redCards: 1,
            totalMatches: 27,
            position: "Alero",
            photo: "http://placeimg.com/640/480",
            id: "4",
          },
          {
            name: "Jeremy Emard",
            number: 43,
            goals: 77,
            assists: 91,
            yellowCards: 11,
            redCards: 18,
            totalMatches: 46,
            position: "Alero",
            photo: "http://placeimg.com/640/480",
            id: "5",
          },
          {
            name: "Marlene Reichert",
            number: 33,
            goals: 82,
            assists: 82,
            yellowCards: 9,
            redCards: 7,
            totalMatches: 21,
            position: "Alero",
            photo: "http://placeimg.com/640/480",
            id: "6",
          },
          {
            name: "Dana Tillman",
            number: 9,
            goals: 97,
            assists: 93,
            yellowCards: 15,
            redCards: 18,
            totalMatches: 37,
            position: "Alero",
            photo: "http://placeimg.com/640/480",
            id: "7",
          },
          {
            name: "Pauline Pacocha II",
            number: 39,
            goals: 52,
            assists: 18,
            yellowCards: 13,
            redCards: 20,
            totalMatches: 41,
            position: "Alero",
            photo: "http://placeimg.com/640/480",
            id: "8",
          },
          {
            name: "Jenna Reichert MD",
            number: 79,
            goals: 23,
            assists: 5,
            yellowCards: 1,
            redCards: 7,
            totalMatches: 33,
            position: "Alero",
            photo: "http://placeimg.com/640/480",
            id: "9",
          },
          {
            name: "Mrs. Edwin Ward",
            number: 59,
            goals: 135,
            assists: 99,
            yellowCards: 19,
            redCards: 15,
            totalMatches: 10,
            position: "Alero",
            photo: "http://placeimg.com/640/480",
            id: "10",
          },
          {
            name: "Patti Dare",
            number: 62,
            goals: 73,
            assists: 81,
            yellowCards: 20,
            redCards: 17,
            totalMatches: 12,
            position: "Alero",
            photo: "http://placeimg.com/640/480",
            id: "11",
          },
          {
            name: "Miranda Swaniawski",
            number: 90,
            goals: 172,
            assists: 34,
            yellowCards: 5,
            redCards: 17,
            totalMatches: 21,
            position: "Alero",
            photo: "http://placeimg.com/640/480",
            id: "12",
          },
        ],
      };

      const players = loadPlayersThunk();
      await players(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});

describe("Given a deletePlayer thunk", () => {
  describe("When it's called with a player id", () => {
    test("Then it should call the dispatch with an action", async () => {
      const dispatch = jest.fn();
      const action = {
        type: "delete-player",
        id: "1",
      };

      const deletedPlayer = deletePlayerThunk(action.id);
      await deletedPlayer(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a createPlayer thunk", () => {
  describe("When it's called with a new player", () => {
    test("Then it should call the dispatch with an createPlayerAction", async () => {
      const dispatch = jest.fn();
      const player = {
        name: "Cristiano",
        number: "7",
        goals: "21",
        assists: "3",
        yellowCards: "4",
        redCards: "1",
        totalMatches: "21",
        position: "Alero",
        photo:
          "https://img.uefa.com/imgml/TP/players/1/2022/324x324/63706.jpg?imwidth=36",
      };
      const action = {
        type: "create-player",
        player,
      };

      const createdPlayer = createPlayerThunk(action.player);
      await createdPlayer(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it's called with a wrong new player", () => {
    test("Then it should return an error", async () => {
      const error = new Error("Can't create the player");
      const dispatch = jest.fn();
      const player = {
        name: "Cristiano",
        number: "7",
        goals: "21",
        assists: "3",
        yellowCards: "4",
        redCards: "1",
        totalMatches: "21",
        position: "Alero",
        photo:
          "https://img.uefa.com/imgml/TP/players/1/2022/324x324/63706.jpg?imwidth=36",
      };
      const action = {
        type: "create-player",
        player,
      };

      const createdPlayer: any = createPlayerThunk(action.player);
      await createdPlayer(error);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});

describe("Given a updatePlayerThunk function", () => {
  describe("When it's called with an id and the updated player", () => {
    test("Then it should call the dispatch with an updatePlayerAction", async () => {
      const dispatch = jest.fn();
      const player = {
        name: "Cristiano",
        number: "7",
        goals: "21",
        assists: "3",
        yellowCards: "4",
        redCards: "1",
        totalMatches: "21",
        position: "Alero",
        photo:
          "https://img.uefa.com/imgml/TP/players/1/2022/324x324/63706.jpg?imwidth=36",
        id: "1",
      };
      const action = {
        type: "update-player",
        player,
      };

      const updatedPlayer = updatePlayerThunk(action.player, action.player.id);
      await updatedPlayer(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it's called with an id and updated player, but it has an error on the server", () => {
    test("Then it should call the dispatch with an updatePlayerAction", async () => {
      const dispatch = jest.fn();
      const error = new Error("Can't update the player");
      const player = {
        name: "Cristiano",
        number: "7",
        goals: "21",
        assists: "3",
        yellowCards: "4",
        redCards: "1",
        totalMatches: "21",
        position: "Alero",
        photo:
          "https://img.uefa.com/imgml/TP/players/1/2022/324x324/63706.jpg?imwidth=36",
        id: "1",
      };
      const action = {
        type: "update-player",
        player,
      };

      const updatedPlayer: any = updatePlayerThunk(
        action.player,
        action.player.id
      );
      await updatedPlayer(error);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});

describe("Given a filterPlayersThunk function", () => {
  describe("When it's called", () => {
    test("Then it should dispatch an filterPlayers action", async () => {
      const dispatch = jest.fn();
      const players = [
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
        {
          name: "Eva Gleichner",
          number: 10,
          goals: 69,
          assists: 43,
          yellowCards: 14,
          redCards: 9,
          totalMatches: 37,
          position: "Alero",
          photo: "http://placeimg.com/640/480",
          id: "3",
        },
        {
          name: "Phyllis Stoltenberg",
          number: 88,
          goals: 26,
          assists: 19,
          yellowCards: 8,
          redCards: 1,
          totalMatches: 27,
          position: "Alero",
          photo: "http://placeimg.com/640/480",
          id: "4",
        },
        {
          name: "Jeremy Emard",
          number: 43,
          goals: 77,
          assists: 91,
          yellowCards: 11,
          redCards: 18,
          totalMatches: 46,
          position: "Alero",
          photo: "http://placeimg.com/640/480",
          id: "5",
        },
        {
          name: "Marlene Reichert",
          number: 33,
          goals: 82,
          assists: 82,
          yellowCards: 9,
          redCards: 7,
          totalMatches: 21,
          position: "Alero",
          photo: "http://placeimg.com/640/480",
          id: "6",
        },
        {
          name: "Dana Tillman",
          number: 9,
          goals: 97,
          assists: 93,
          yellowCards: 15,
          redCards: 18,
          totalMatches: 37,
          position: "Alero",
          photo: "http://placeimg.com/640/480",
          id: "7",
        },
        {
          name: "Pauline Pacocha II",
          number: 39,
          goals: 52,
          assists: 18,
          yellowCards: 13,
          redCards: 20,
          totalMatches: 41,
          position: "Alero",
          photo: "http://placeimg.com/640/480",
          id: "8",
        },
        {
          name: "Jenna Reichert MD",
          number: 79,
          goals: 23,
          assists: 5,
          yellowCards: 1,
          redCards: 7,
          totalMatches: 33,
          position: "Alero",
          photo: "http://placeimg.com/640/480",
          id: "9",
        },
        {
          name: "Mrs. Edwin Ward",
          number: 59,
          goals: 135,
          assists: 99,
          yellowCards: 19,
          redCards: 15,
          totalMatches: 10,
          position: "Alero",
          photo: "http://placeimg.com/640/480",
          id: "10",
        },
        {
          name: "Patti Dare",
          number: 62,
          goals: 73,
          assists: 81,
          yellowCards: 20,
          redCards: 17,
          totalMatches: 12,
          position: "Alero",
          photo: "http://placeimg.com/640/480",
          id: "11",
        },
        {
          name: "Miranda Swaniawski",
          number: 90,
          goals: 172,
          assists: 34,
          yellowCards: 5,
          redCards: 17,
          totalMatches: 21,
          position: "Alero",
          photo: "http://placeimg.com/640/480",
          id: "12",
        },
      ];
      const position = "cierre";
      const expectedAction = {
        type: "filter-players",
        position,
        players,
      };

      const filteredPlayers = filterPlayersThunk(position);
      await filteredPlayers(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
