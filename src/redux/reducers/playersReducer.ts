import actionsTypes from "../actions/actionsTypes";
import { Player } from "../../Interfaces/PlayerInterface";
import { LoadPlayersAction } from "../../Interfaces/LoadPlayersActionInterface";
import { EmptyObject } from "redux";
import { DeletePlayerAction } from "../../Interfaces/DeletePlayerActionInterface";

const playersReducer = (
  players: Player[] = [],
  action: LoadPlayersAction | EmptyObject = {}
): Player[] => {
  let newPlayer;

  switch ((action as LoadPlayersAction).type) {
    case actionsTypes.loadPlayers:
      newPlayer = [...(action as LoadPlayersAction).players];
      break;
    case actionsTypes.deletePlayer:
      newPlayer = players.filter(
        (player) => player.id !== (action as DeletePlayerAction).id
      );
      break;
    default:
      newPlayer = [...players];
      break;
  }
  return newPlayer;
};

export default playersReducer;
