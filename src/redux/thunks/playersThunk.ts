import { AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { Player } from "../../Interfaces/PlayerInterface";
import {
  deletePlayerAction,
  loadPlayersAction,
} from "../actions/actionsCreator";
import { RootState } from "../store";

const url = process.env.REACT_APP_API_RENDER;

export const loadPlayersThunk =
  (): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch: Dispatch) => {
    const response = await fetch(`${url}user/load-user-players`, {
      method: "GET",
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBhdSIsImlkIjoiNjIyNzE5MDYyYjJhMDIzNzQ1ODYxZDUyIiwiaWF0IjoxNjQ2ODM1ODEzfQ.SjA-pGMQWfRLTPk45sB7YW_eOa1DmK_8CWwS8ANHixg`,
      },
    });

    const players: Player[] = await response.json();
    return dispatch(loadPlayersAction(players));
  };

export const deletePlayerThunk =
  (id: string): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch: Dispatch) => {
    const response = await fetch(`${url}player/delete-player/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBhdSIsImlkIjoiNjIyNzE5MDYyYjJhMDIzNzQ1ODYxZDUyIiwiaWF0IjoxNjQ2ODM1ODEzfQ.SjA-pGMQWfRLTPk45sB7YW_eOa1DmK_8CWwS8ANHixg`,
      },
    });

    if (response.ok) {
      return dispatch(deletePlayerAction(id));
    }
  };
