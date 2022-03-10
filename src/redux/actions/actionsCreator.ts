import { LoadUser } from "../../Interfaces/LoadUserActionInterface";
import { User } from "../../Interfaces/UserInterface";
import actionsTypes from "./actionsTypes";

export const loadUserAction = (user: User): LoadUser => ({
  type: actionsTypes.loadUser,
  user,
});
