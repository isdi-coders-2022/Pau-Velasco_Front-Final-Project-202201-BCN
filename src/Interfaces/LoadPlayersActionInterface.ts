import { Player } from "./PlayerInterface";

export interface LoadPlayersAction {
  type: string;
  players: Player[];
}
