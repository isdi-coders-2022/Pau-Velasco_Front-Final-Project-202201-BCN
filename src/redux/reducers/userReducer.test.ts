import userReducer from "./userReducer";

describe("Given a userReducer reducer", () => {
  describe("When it receives an empty user and an action with the new user", () => {
    test("Then it should return an object with the new user", () => {
      const initialUser = {
        username: "",
        teamName: "",
        password: "",
        players: [],
        id: "",
      };

      const expectedUser = {
        username: "Cristiano",
        teamName: "Man U",
        password: "afjdsk",
        players: [],
        id: "23",
      };

      const action = {
        type: "load-user",
        user: expectedUser,
      };

      const newUser = userReducer(initialUser, action);

      expect(newUser).toEqual(expectedUser);
    });
  });

  describe("When it doesn't receives user or action", () => {
    test("Then it should return the user", () => {
      const user = {
        username: "",
        teamName: "",
        password: "",
        players: [],
        id: "",
      };

      const newUser = userReducer();

      expect(newUser).toEqual(user);
    });
  });
});
