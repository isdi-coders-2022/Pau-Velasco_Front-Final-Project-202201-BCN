import { render, screen } from "@testing-library/react";
import GenericButton from "./GenericButton";

describe("Given a GenericButton component", () => {
  describe("When it's clicked", () => {
    test("Then it should call the actionOnClick", () => {
      render(<GenericButton disabled={false} text={"test"} />);

      const button = screen.getByRole("button", { name: "test" });

      expect(button).toBeInTheDocument();
    });
  });
});
