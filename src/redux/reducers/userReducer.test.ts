import { EmptyObject } from "redux";
import { generateRandomUser } from "../../mocks/userFactory";
import userReducer from "./userReducer";

describe("Given a userReducer reducer", () => {
  describe("When it receives an empty user and an action with the new user", () => {
    test("Then it should return an object with the new user", () => {
      const initialUser: EmptyObject = {};

      const expectedUser = generateRandomUser();

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
      const user = {};

      const newUser = userReducer();

      expect(newUser).toEqual(user);
    });
  });
});
