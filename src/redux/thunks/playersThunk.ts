import { ThunkDispatch } from "redux-thunk";
import { CreatePlayerAction } from "../../Interfaces/CreataePlayerActionInterface";
import { DeletePlayerAction } from "../../Interfaces/DeletePlayerActionInterface";
import { LoadPlayersAction } from "../../Interfaces/LoadPlayersActionInterface";
import { CreatedPlayer, Player } from "../../Interfaces/PlayerInterface";
import {
  createPlayerAction,
  deletePlayerAction,
  loadPlayersAction,
} from "../actions/actionsCreator";
import { RootState } from "../store";

const url = process.env.REACT_APP_API_RENDER;

export const loadPlayersThunk =
  () =>
  async (
    dispatch: ThunkDispatch<RootState, void, LoadPlayersAction>
  ): Promise<void> => {
    const response = await fetch(`${url}user/load-user-players`, {
      method: "GET",
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBhdSIsImlkIjoiNjIyNzE5MDYyYjJhMDIzNzQ1ODYxZDUyIiwiaWF0IjoxNjQ2ODM1ODEzfQ.SjA-pGMQWfRLTPk45sB7YW_eOa1DmK_8CWwS8ANHixg`,
      },
    });

    const players: Player[] = await response.json();
    dispatch(loadPlayersAction(players));
  };

export const deletePlayerThunk =
  (id: string) =>
  async (
    dispatch: ThunkDispatch<RootState, void, DeletePlayerAction>
  ): Promise<void> => {
    const response = await fetch(`${url}player/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBhdSIsImlkIjoiNjIyNzE5MDYyYjJhMDIzNzQ1ODYxZDUyIiwiaWF0IjoxNjQ2ODM1ODEzfQ.SjA-pGMQWfRLTPk45sB7YW_eOa1DmK_8CWwS8ANHixg`,
      },
    });

    if (response.ok) {
      dispatch(deletePlayerAction(id));
    }
  };

export const createPlayerThunk =
  (player: CreatedPlayer) =>
  async (
    dispatch: ThunkDispatch<RootState, void, CreatePlayerAction>
  ): Promise<void> => {
    const data = new FormData();
    data.append("photo", player.photo);
    data.append("name", player.name);
    data.append("number", player.number);
    data.append("goals", player.goals);
    data.append("assists", player.assists);
    data.append("yellowCards", player.yellowCards);
    data.append("redCards", player.redCards);
    data.append("totalMatches", player.totalMatches);
    data.append("position", player.position);

    const response = await fetch(`${url}player/create-player`, {
      method: "POST",
      body: data,
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBhdSIsImlkIjoiNjIyNzE5MDYyYjJhMDIzNzQ1ODYxZDUyIiwiaWF0IjoxNjQ2ODM1ODEzfQ.SjA-pGMQWfRLTPk45sB7YW_eOa1DmK_8CWwS8ANHixg`,
      },
    });

    const newPlayer: Player = await response.json();
    dispatch(createPlayerAction(newPlayer));
  };
