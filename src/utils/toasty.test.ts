import { createFeedback, deleteFeedback, notCreateFeedback } from "./toasty";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

jest.spyOn(toast, "error").mockImplementation((content) => {
  return "error";
});

jest.spyOn(toast, "success").mockImplementation((content) => {
  return "success";
});

describe("Given a deleteFeedback function", () => {
  describe("When it's called with a name", () => {
    test("Then it should call toast error", () => {
      deleteFeedback("hola");

      expect(toast.error).toHaveBeenCalled();
    });
  });
});
