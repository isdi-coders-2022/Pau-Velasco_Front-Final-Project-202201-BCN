import { User } from "../../Interfaces/UserInterface";
import actionsTypes from "./actionsTypes";

export const loadUserAction = (user: User) => ({
  type: actionsTypes.loadUser,
  user,
});
