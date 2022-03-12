import { LoadUserAction } from "../../Interfaces/LoadUserActionInterface";
import { LoadPlayersAction } from "../../Interfaces/LoadPlayersActionInterface";
import { Player } from "../../Interfaces/PlayerInterface";
import { User } from "../../Interfaces/UserInterface";
import actionsTypes from "./actionsTypes";
import { DeletePlayerAction } from "../../Interfaces/DeletePlayerActionInterface";

export const loadUserAction = (user: User): LoadUserAction => ({
  type: actionsTypes.loadUser,
  user,
});

export const loadPlayersAction = (players: Player[]): LoadPlayersAction => ({
  type: actionsTypes.loadPlayers,
  players,
});

export const deletePlayerAction = (id: string): DeletePlayerAction => ({
  type: actionsTypes.deletePlayer,
  id,
});
