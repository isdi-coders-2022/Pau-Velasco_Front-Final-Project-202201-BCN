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

export const createFeedback = (name: string) => {
  toast.success(`Player ${name} created`, {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 1500,
    theme: "colored",
    hideProgressBar: true,
  });
};

export const notCreateFeedback = (name: string) => {
  toast.error(`Can't create ${name} player`, {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 1500,
    theme: "colored",
    hideProgressBar: true,
  });
};

export const updateFeedback = (name: string) => {
  toast.success(`Player ${name} updated`, {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 1500,
    theme: "colored",
    hideProgressBar: true,
  });
};

export const notUpdateFeedback = (name: string) => {
  toast.error(`Can't update ${name} player`, {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 1500,
    theme: "colored",
    hideProgressBar: true,
  });
};

export const wrongLoginFeedback = () => {
  toast.error(`Wrong username or password`, {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 1500,
    theme: "colored",
    hideProgressBar: true,
  });
};
