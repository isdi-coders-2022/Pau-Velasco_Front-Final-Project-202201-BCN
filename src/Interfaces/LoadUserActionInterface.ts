import { Action } from "./ActionInterface";
import { User } from "./UserInterface";

export interface LoadUserAction extends Action {
  user: User;
}
