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

describe("Given a createFeedback function", () => {
  describe("When it's called with a name", () => {
    test("Then it should call toast error", () => {
      createFeedback("hola");

      expect(toast.success).toHaveBeenCalled();
    });
  });
});

describe("Given a notCreateFeedback function", () => {
  describe("When it's called with a name", () => {
    test("Then it should call toast error", () => {
      notCreateFeedback("hola");

      expect(toast.error).toHaveBeenCalled();
    });
  });
});
