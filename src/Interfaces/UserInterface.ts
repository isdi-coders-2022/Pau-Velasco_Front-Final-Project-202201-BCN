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

export interface RegiterUser {
  username: string;
  password: string;
  teamName: string;
}

export interface RegisteredUser {
  username: string;
  password: string;
  teamName: string;
  players: string[];
  id: string;
}
