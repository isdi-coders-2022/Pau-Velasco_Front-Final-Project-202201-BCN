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

  describe("When it's rendered with a title, and nine inputs", () => {
    test("Then it should a title", () => {
      const title = "edita un jugador de tu equipo";
      const nameInput = /nombre del jugador/i;
      const numberInput = /dorsal/i;
      const goalsInput = /goles/i;
      const assistsInput = /assists/i;
      const amarillInput = /amaril/i;
      const rojInput = /rojas/i;
      const jugadosInput = /p. jugados/i;
      const posicionInput = /posición/i;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <UpdatePlayer />
          </Provider>
        </BrowserRouter>
      );

      const findTitle = screen.getByText(title);
      const findName = screen.getByLabelText(nameInput);
      const findNumber = screen.getByLabelText(numberInput);
      const findGoals = screen.getByLabelText(goalsInput);
      const findAssists = screen.getByLabelText(assistsInput);
      const findAmarill = screen.getByLabelText(amarillInput);
      const findRoj = screen.getByLabelText(rojInput);
      const findJugados = screen.getByLabelText(jugadosInput);
      const findPosicion = screen.getByLabelText(posicionInput);

      expect(findTitle).toBeInTheDocument();
      expect(findName).toBeInTheDocument();
      expect(findNumber).toBeInTheDocument();
      expect(findGoals).toBeInTheDocument();
      expect(findAssists).toBeInTheDocument();
      expect(findAmarill).toBeInTheDocument();
      expect(findRoj).toBeInTheDocument();
      expect(findJugados).toBeInTheDocument();
      expect(findPosicion).toBeInTheDocument();
    });
  });
});
