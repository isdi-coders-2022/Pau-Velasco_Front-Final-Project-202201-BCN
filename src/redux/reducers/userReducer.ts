import { LoadUser } from "../../Interfaces/LoadUserActionInterface";
import { User } from "../../Interfaces/UserInterface";
import actionsTypes from "../actions/actionsTypes";

const initialUserAction = {
  type: "",
  user: {
    username: "",
    teamName: "",
    password: "",
    players: [],
    id: "",
  },
};

const initialUser = {
  username: "",
  teamName: "",
  password: "",
  players: [],
  id: "",
};

const userReducer = (
  user: User = initialUser,
  action: LoadUser = initialUserAction
): User => {
  let newUser;

  switch (action.type) {
    case actionsTypes.loadUser:
      newUser = { ...action.user };
      break;
    default:
      newUser = { ...user };
      break;
  }
  return newUser;
};

export default userReducer;
