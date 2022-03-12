import actionsTypes from "../actions/actionsTypes";
import { Player } from "../../Interfaces/PlayerInterface";
import { LoadPlayersAction } from "../../Interfaces/LoadPlayersActionInterface";
import { EmptyObject } from "redux";

const playersReducer = (
  players: Player[] = [],
  action: LoadPlayersAction | EmptyObject = {}
): Player[] => {
  let newPlayer;

  switch ((action as LoadPlayersAction).type) {
    case actionsTypes.loadPlayers:
      newPlayer = [...(action as LoadPlayersAction).players];
      break;
    default:
      newPlayer = [...players];
      break;
  }
  return newPlayer;
};

export default playersReducer;
