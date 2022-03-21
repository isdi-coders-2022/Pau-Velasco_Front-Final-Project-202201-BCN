import { Dispatch } from "redux";
import { User } from "../../Interfaces/UserInterface";
import { loadUserAction } from "../actions/actionsCreator";

const url: any = process.env.REACT_APP_API_RENDER;

export const loadUserThunk = () => async (dispatch: Dispatch) => {
  const response = await fetch(`${url}user/load-user`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  const user: User = await response.json();
  return dispatch(loadUserAction(user));
};
