import { CreatedPlayer } from "../Interfaces/PlayerInterface";

export const dataForm = (player: CreatedPlayer) => {
  const data = new FormData();
  data.append("photo", player.photo);
  data.append("name", player.name);
  data.append("number", player.number);
  data.append("goals", player.goals);
  data.append("assists", player.assists);
  data.append("yellowCards", player.yellowCards);
  data.append("redCards", player.redCards);
  data.append("totalMatches", player.totalMatches);
  data.append("position", player.position);

  return data;
};
