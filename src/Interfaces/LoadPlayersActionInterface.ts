import { Action } from "./ActionInterface";
import { Player } from "./PlayerInterface";

export interface LoadPlayersAction extends Action {
  players: Player[];
}
