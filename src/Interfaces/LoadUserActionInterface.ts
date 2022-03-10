import { User } from "./UserInterface";

export interface LoadUserAction {
  type: string;
  user: User;
}
