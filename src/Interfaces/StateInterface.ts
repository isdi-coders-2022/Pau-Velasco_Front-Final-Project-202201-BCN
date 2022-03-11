import { Player } from "./PlayerInterface";
import { User } from "./UserInterface";

export interface State {
  user: User;
  players: Player[];
}
