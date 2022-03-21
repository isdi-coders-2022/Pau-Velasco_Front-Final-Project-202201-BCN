export interface User {
  username: string;
  teamName: string;
  password: string;
  players: string[];
  id: string;
}

export interface LoggedUser {
  username: string;
  password: string;
}
