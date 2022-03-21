import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";

const mockLocalStorage = {
  removeItem: () => jest.fn(),
};
Object.defineProperty(window, "localStorage", { value: mockLocalStorage });

describe("Given a NavBar component", () => {
  describe("When it`s rendered", () => {
    test("Then it should render three paragraph", () => {
      render(
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      );

      const findLogout = screen.getByText(/log out/i);
      userEvent.click(findLogout);

      const findMyTeam = screen.getByText(/mi equipo/i);
      const findAddPlayer = screen.getByText(/añadir jugador/i);

      expect(findLogout).toBeInTheDocument();
      expect(findMyTeam).toBeInTheDocument();
      expect(findAddPlayer).toBeInTheDocument();
    });
  });

  test("Then it should render three list items", () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    const findLi = screen.getAllByRole("listitem");

    expect(findLi[0]).toBeInTheDocument();
    expect(findLi[1]).toBeInTheDocument();
    expect(findLi[2]).toBeInTheDocument();
  });
});
