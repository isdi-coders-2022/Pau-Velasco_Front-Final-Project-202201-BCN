import { Action } from "./ActionInterface";
import { User } from "./UserInterface";

export interface LoginUserAction extends Action {
  user: User;
}
