import { generateRandomPlayer } from "../mocks/playerFactory";
import { updateBlankFields } from "./blankFields";

describe("Given an updateBlankFields funciton", () => {
  describe("When it receives a player", () => {
    test("Then it should return a blankFields object with the player properties", () => {
      const player = generateRandomPlayer();
      const { id, ...expectedPlayer } = player;
      const blankFields = updateBlankFields(player);

      expect(blankFields).toEqual(expectedPlayer);
    });
  });
});
