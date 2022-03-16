import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export const deleteFeedback = (name: string) => {
  toast.error(`Player ${name} deleted`, {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 1500,
    theme: "colored",
    hideProgressBar: true,
  });
};
