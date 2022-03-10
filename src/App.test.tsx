import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("Given an App page", () => {
  describe("When it's rendered", () => {
    test("Then it should render the NavBar", () => {
      render(
        <BrowserRouter>
          <App />
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
