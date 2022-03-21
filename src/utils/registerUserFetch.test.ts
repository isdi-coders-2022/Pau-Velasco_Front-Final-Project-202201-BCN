import { registerUser } from "./registerUserFetch";

describe("Given a registerUser function", () => {
  describe("When it's called with a username and password and teamName", () => {
    test("Then it should return the new user", async () => {
      const user = {
        username: "cristianito",
        password: "thebest",
        teamName: "manU",
      };

      const newUser = await registerUser(user);

      expect(newUser).toHaveProperty("username", "cristianito");
    });
  });
});
