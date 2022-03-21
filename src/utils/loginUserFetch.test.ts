import { loginUser } from "./loginUserFetch";

describe("Given a loginUser function", () => {
  describe("When it's called with a username and password", () => {
    test("Then it should return a token", async () => {
      const user = {
        username: "cristianito",
        password: "thebest",
      };

      const token = await loginUser(user);

      expect(token).toHaveProperty("token");
    });
  });
});
