import { Player } from "../../Interfaces/PlayerInterface";
import actionsTypes from "./actionsTypes";

export const loadUserAction = (user: Player) => ({
  type: actionsTypes.loadUser,
  user,
});
