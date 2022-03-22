import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PlayersFilter from "./PlayersFilter";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a PlayersFilter component", () => {
  describe("When the user select portero option", () => {
    test("Then it should call the disptach function", () => {
      render(<PlayersFilter />);

      const selectPortero = screen.getByRole("combobox");
      userEvent.selectOptions(selectPortero, "PORTERO");

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
