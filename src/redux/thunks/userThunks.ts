import { Dispatch } from "redux";
import { loadUserAction } from "../actions/actionsCreator";

const url: string = `${process.env.REACT_APP_API_RENDER}user/load-user`;

export const loadUserThunk = () => async (dispatch: Dispatch) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBhdSIsImlkIjoiNjIyNzE5MDYyYjJhMDIzNzQ1ODYxZDUyIiwiaWF0IjoxNjQ2ODM1ODEzfQ.SjA-pGMQWfRLTPk45sB7YW_eOa1DmK_8CWwS8ANHixg`,
    },
  });

  const user: any = await response.json();
  return dispatch(loadUserAction(user));
};
