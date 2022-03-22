import { Action } from "./ActionInterface";
import { Player } from "./PlayerInterface";

export interface FilterPlayerAction extends Action {
  position: string;
  players: Player[];
}
