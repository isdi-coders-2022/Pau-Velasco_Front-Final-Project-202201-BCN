import actionsTypes from "../actions/actionsTypes";
import { Player } from "../../Interfaces/PlayerInterface";
import { LoadPlayersAction } from "../../Interfaces/LoadPlayersActionInterface";
import { EmptyObject } from "redux";
import { DeletePlayerAction } from "../../Interfaces/DeletePlayerActionInterface";
import { Action } from "../../Interfaces/ActionInterface";
import { CreatePlayerAction } from "../../Interfaces/CreataePlayerActionInterface";

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
      const deletedPlayers = players.filter(
        (player) => player.id !== (action as DeletePlayerAction).id
      );
      newPlayers = [...deletedPlayers];
      break;
    case actionsTypes.createPlayer:
      newPlayers = [...players, (action as CreatePlayerAction).player];
      break;
    default:
      newPlayers = [...players];
      break;
  }
  return newPlayers;
};

export default playersReducer;
