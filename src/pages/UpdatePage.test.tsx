import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../redux/store";
import UpdatePlayer from "./UpdatePlayer";

describe("Given a UpdatePlayer page", () => {
  describe("When it's rendered", () => {
    test("Then it should render a header with 'edita un jugador de tu equipo'", () => {
      const expectedTitle = "edita un jugador de tu equipo";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <UpdatePlayer />
          </Provider>
        </BrowserRouter>
      );

      const findTitle = screen.getByText(expectedTitle);

      expect(findTitle).toBeInTheDocument();
    });
  });
});
