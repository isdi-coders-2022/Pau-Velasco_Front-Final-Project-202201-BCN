import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./redux/store";

describe("Given an App page", () => {
  describe("When it's rendered", () => {
    test("Then it should render the NavBar", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      );

      const findLogout = screen.getByText(/log out/i);
      const findMyTeam = screen.getByText(/mi equipo/i);
      const findAddPlayer = screen.getByText(/añadir jugador/i);

      expect(findLogout).toBeInTheDocument();
      expect(findMyTeam).toBeInTheDocument();
      expect(findAddPlayer).toBeInTheDocument();
    });
  });
});
