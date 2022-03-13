import actionsTypes from "../actions/actionsTypes";
import { Player } from "../../Interfaces/PlayerInterface";
import { LoadPlayersAction } from "../../Interfaces/LoadPlayersActionInterface";
import { EmptyObject } from "redux";
import { DeletePlayerAction } from "../../Interfaces/DeletePlayerActionInterface";
import { Action } from "../../Interfaces/ActionInterface";

const playersReducer = (
  players: Player[] = [],
  action: Action | EmptyObject = {}
): Player[] => {
  let newPlayers;

  switch ((action as Action).type) {
    case actionsTypes.loadPlayers:
      newPlayers = [...(action as LoadPlayersAction).players];
      break;
    case actionsTypes.deletePlayer:
      console.log("ENTROOO");
      newPlayers = players.filter(
        (player) => player.id !== (action as DeletePlayerAction).id
      );
      break;
    default:
      newPlayers = [...players];
      break;
  }
  return newPlayers;
};

export default playersReducer;
