import actionsTypes from "../actions/actionsTypes";
import { Player } from "../../Interfaces/PlayerInterface";
import { LoadPlayersAction } from "../../Interfaces/LoadPlayersActionInterface";

const initialPlayersAction = {
  type: "",
  players: [
    {
      name: "",
      number: 0,
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      totalMatches: 0,
      position: "",
      photo: "",
      id: "",
    },
  ],
};

const initialPlayers = [
  {
    name: "",
    number: 0,
    goals: 0,
    assists: 0,
    yellowCards: 0,
    redCards: 0,
    totalMatches: 0,
    position: "",
    photo: "",
    id: "",
  },
];

const playersReducer = (
  players: Player[] = initialPlayers,
  action: LoadPlayersAction = initialPlayersAction
): Player[] => {
  let newPlayer;

  switch (action.type) {
    case actionsTypes.loadPlayers:
      newPlayer = [...action.players];
      break;
    default:
      newPlayer = [...players];
      break;
  }
  return newPlayer;
};

export default playersReducer;
