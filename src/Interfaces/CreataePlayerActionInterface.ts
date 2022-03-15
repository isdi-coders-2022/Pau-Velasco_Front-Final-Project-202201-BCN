import { Action } from "./ActionInterface";
import { Player } from "./PlayerInterface";

export interface CreatePlayerAction extends Action {
  player: Player;
}
