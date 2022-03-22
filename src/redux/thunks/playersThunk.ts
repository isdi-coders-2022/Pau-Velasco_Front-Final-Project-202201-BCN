import { Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { DeletePlayerAction } from "../../Interfaces/DeletePlayerActionInterface";
import { LoadPlayersAction } from "../../Interfaces/LoadPlayersActionInterface";
import { CreatedPlayer, Player } from "../../Interfaces/PlayerInterface";
import {
  createPlayerAction,
  deletePlayerAction,
  filterPlayersAction,
  loadPlayersAction,
  updatePlayerAction,
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
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const players: Player[] = await response.json();
    dispatch(loadPlayersAction(players));
  };

export const filterPlayersThunk =
  (filter: string) =>
  async (
    dispatch: ThunkDispatch<RootState, void, LoadPlayersAction>
  ): Promise<void> => {
    const response = await fetch(`${url}user/load-user-players`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const players: Player[] = await response.json();
    dispatch(filterPlayersAction(filter, players));
  };

export const deletePlayerThunk =
  (id: string) =>
  async (
    dispatch: ThunkDispatch<RootState, void, DeletePlayerAction>
  ): Promise<void> => {
    const response = await fetch(`${url}player/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (response.ok) {
      dispatch(deletePlayerAction(id));
    }
  };

export const createPlayerThunk =
  (player: CreatedPlayer) =>
  async (dispatch: Dispatch): Promise<any> => {
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
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    try {
      const newPlayer: Player = await response.json();
      dispatch(createPlayerAction(newPlayer));
      return newPlayer;
    } catch (error) {
      return { error: "Can't create the player" };
    }
  };

export const updatePlayerThunk =
  (player: CreatedPlayer, id: any) =>
  async (dispatch: Dispatch): Promise<any> => {
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

    const response = await fetch(`${url}player/update/${id}`, {
      method: "PUT",
      body: data,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    try {
      const newPlayer: Player = await response.json();
      dispatch(updatePlayerAction(newPlayer));
      return newPlayer;
    } catch (error) {
      return { error: "Can't update the player" };
    }
  };
