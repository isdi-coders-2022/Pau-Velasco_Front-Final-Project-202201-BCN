import { Action } from "./ActionInterface";
import { Player } from "./PlayerInterface";

export interface UpdatePlayerAction extends Action {
  player: Player;
}
