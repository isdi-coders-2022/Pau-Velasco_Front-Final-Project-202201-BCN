import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import { updatePlayerThunk } from "../../redux/thunks/playersThunk";
import { updateFeedback } from "../../utils/toasty";
import PlayerForm from "./PlayerForm";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a PlayerForm component", () => {
  describe("When it's rendered with a title, and nine inputs", () => {
    test("Then it should a title", () => {
      const title = "This is a title";
      const nameInput = /nombre del jugador/i;
      const numberInput = /dorsal/i;
      const goalsInput = /goles/i;
      const assistsInput = /assists/i;
      const amarillInput = /amaril/i;
      const rojInput = /rojas/i;
      const jugadosInput = /p. jugados/i;
      const posicionInput = /posición/i;

      render(
        <Provider store={store}>
          <PlayerForm
            badFeedback={() => {}}
            goodFeedback={() => {}}
            heading={title}
            thunkFunction={() => {}}
          />
        </Provider>
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

  describe("When the user creates a player", () => {
    test("Then it should enable the button submit", () => {
      const numberTest = "1";
      const nameTest = "Cristiano";
      const positionTest = "cierre";
      const thunkFunction = jest.fn();
      const goodFeedback = jest.fn();
      const file = new File(["hello"], "hello.png", { type: "image/png" });

      render(
        <Provider store={store}>
          <PlayerForm
            badFeedback={() => {}}
            goodFeedback={goodFeedback}
            heading={""}
            thunkFunction={thunkFunction}
          />
        </Provider>
      );

      const inputsNumber = screen.getAllByRole("spinbutton");
      inputsNumber.forEach((input) => userEvent.type(input, numberTest));

      const inputName = screen.getByRole("textbox");
      userEvent.type(inputName, nameTest);

      const selectPosition = screen.getByRole("combobox");
      userEvent.selectOptions(selectPosition, positionTest);

      const addFile = screen.getByLabelText("FOTO");
      userEvent.upload(addFile, file);

      const submitButton = screen.getByRole("button");

      expect(submitButton).not.toBeDisabled();
    });
  });

  describe("When the user creates a player and the inputs numbers upper than 99", () => {
    test("Then it should display 99", () => {
      const numberTest = "999";
      const thunkFunction = jest.fn();
      const goodFeedback = jest.fn();
      const expectedOutput = "99";

      render(
        <Provider store={store}>
          <PlayerForm
            badFeedback={() => {}}
            goodFeedback={goodFeedback}
            heading={""}
            thunkFunction={thunkFunction}
          />
        </Provider>
      );

      const inputsNumber = screen.getAllByRole("spinbutton");
      inputsNumber.forEach((input) => userEvent.type(input, numberTest));

      expect((inputsNumber[0] as HTMLInputElement).value).toBe(expectedOutput);
    });
  });

  describe("When it's rendered with a new player and the user click on submit", () => {
    test("Then it should reset the form and show the created player toast", async () => {
      const player = {
        name: "Cristiano",
        number: 7,
        goals: 21,
        assists: 3,
        yellowCards: 4,
        redCards: 9,
        totalMatches: 21,
        position: "Alero",
        photo:
          "https://img.uefa.com/imgml/TP/players/1/2022/324x324/63706.jpg?imwidth=36",
        id: "1",
      };

      const numberTest = "12";
      const nameTest = "Cristianito";
      const positionTest = "cierre";
      const file = new File(["hello"], "hello.png", { type: "image/png" });

      render(
        <Provider store={store}>
          <BrowserRouter>
            <PlayerForm
              badFeedback={() => {}}
              goodFeedback={updateFeedback}
              heading={""}
              thunkFunction={updatePlayerThunk}
              id="1"
              playerToUpdate={player}
            />
          </BrowserRouter>
        </Provider>
      );

      const inputsNumber = screen.getAllByRole("spinbutton");
      inputsNumber.forEach((input) => userEvent.type(input, numberTest));

      const inputName = screen.getByRole("textbox");
      userEvent.clear(inputName);
      userEvent.type(inputName, nameTest);

      const selectPosition = screen.getByRole("combobox");
      userEvent.selectOptions(selectPosition, positionTest);

      const addFile = screen.getByLabelText("FOTO");
      userEvent.upload(addFile, file);

      const submitButton = screen.getByRole("button");
      userEvent.click(submitButton);

      expect(selectPosition).toHaveValue("");
      expect(inputName).toHaveValue("");
      expect(submitButton).toBeDisabled();

      const findToast = await screen.findByText(`Player ${nameTest} updated`);
      expect(findToast).toBeInTheDocument();
    });
  });
});
