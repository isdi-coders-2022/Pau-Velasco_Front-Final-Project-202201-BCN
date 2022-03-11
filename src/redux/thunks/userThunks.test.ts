import { loadUserThunk } from "./userThunks";

describe("Given a loadUserThunk function", () => {
  describe("When it's called", () => {
    test("Then it should dispatch an loadUser actino", async () => {
      const dispatch = jest.fn();
      const action = {
        type: "load-user",
        user: {
          id: "1",
          password: "afjdsk",
          players: [],
          teamName: "Man U",
          username: "Cristiano",
        },
      };

      const user = loadUserThunk();
      await user(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});
