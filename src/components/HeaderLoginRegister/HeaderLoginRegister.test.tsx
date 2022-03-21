import { render, screen } from "@testing-library/react";
import HeaderLoginRegister from "./HeaderLoginRegister";

describe("Given a HeaderLoginRegister component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a header with the title 'FUTSAL STATS' and the image", () => {
      const title = "FUTSAL STATS";

      render(<HeaderLoginRegister />);

      const findTitle = screen.getByText(title);
      const findImg = screen.getByRole("img");

      expect(findTitle).toBeInTheDocument();
      expect(findImg).toBeInTheDocument();
    });
  });
});
