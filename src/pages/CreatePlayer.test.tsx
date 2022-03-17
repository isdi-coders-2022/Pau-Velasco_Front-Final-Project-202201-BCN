import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../redux/store";
import CreatePlayer from "./CreatePlayer";

describe("Given a CreatePlayer page", () => {
  describe("When it's rendered", () => {
    test("Then it should render a header with 'añade un nuevo jugador a tu equipo'", () => {
      const expectedTitle = "añade un nuevo jugador a tu equipo";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreatePlayer />
          </Provider>
        </BrowserRouter>
      );

      const findTitle = screen.getByText(expectedTitle);

      expect(findTitle).toBeInTheDocument();
    });
  });
});
