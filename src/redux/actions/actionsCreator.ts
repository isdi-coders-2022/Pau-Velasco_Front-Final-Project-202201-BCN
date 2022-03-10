import { LoadPlayersAction } from "../../Interfaces/LoadPlayersActionInterface";
import { LoadUserAction } from "../../Interfaces/LoadUserActionInterface";
import { Player } from "../../Interfaces/PlayerInterface";
import { User } from "../../Interfaces/UserInterface";
import actionsTypes from "./actionsTypes";

export const loadUserAction = (user: User): LoadUserAction => ({
  type: actionsTypes.loadUser,
  user,
});

export const loadPlayersAction = (players: Player[]): LoadPlayersAction => ({
  type: actionsTypes.loadPlayers,
  players,
});
