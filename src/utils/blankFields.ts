import { CreatedPlayer } from "../Interfaces/PlayerInterface";
import { LoggedUser } from "../Interfaces/UserInterface";

export const blankFields: CreatedPlayer = {
  name: "",
  number: "",
  photo: "",
  goals: "",
  assists: "",
  yellowCards: "",
  redCards: "",
  totalMatches: "",
  position: "",
};

export const updateBlankFields = (player: any) => ({
  name: player.name,
  number: player.number,
  photo: player.photo,
  goals: player.goals,
  assists: player.assists,
  yellowCards: player.yellowCards,
  redCards: player.redCards,
  totalMatches: player.totalMatches,
  position: player.position,
});

export const userBlankFields: LoggedUser = {
  username: "",
  password: "",
};
