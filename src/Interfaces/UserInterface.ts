import { Player } from "./PlayerInterface";

export interface User {
  username: string;
  teamName: string;
  password: string;
  players: Player[];
  id: string;
}
