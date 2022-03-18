import {
  createPlayerThunk,
  deletePlayerThunk,
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
        id: "12",
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
});
