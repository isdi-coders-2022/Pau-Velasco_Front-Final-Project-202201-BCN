import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";

describe("Given a NavBar component", () => {
  describe("When it`s rendered", () => {
    test("Then it should render three paragraph", () => {
      render(
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      );

      const findLogout = screen.getByText(/logout/i);
      const findMyTeam = screen.getByText(/mi equipo/i);
      const findAddPlayer = screen.getByText(/añadir jugador/i);

      expect(findLogout).toBeInTheDocument();
      expect(findMyTeam).toBeInTheDocument();
      expect(findAddPlayer).toBeInTheDocument();
    });
  });
});
