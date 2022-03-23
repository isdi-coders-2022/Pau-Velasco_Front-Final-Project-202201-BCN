import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../redux/store";
import DetailPage from "./DetailPage";

describe("Given a DetailPage page", () => {
  describe("When it's rendered with an id in the url", () => {
    test("Then it should display the letter that corresponds to the id", async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <DetailPage />
          </BrowserRouter>
        </Provider>
      );
    });
  });
});
