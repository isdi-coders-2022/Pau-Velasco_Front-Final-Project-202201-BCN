import { User } from "../../Interfaces/UserInterface";
import actionsTypes from "../actions/actionsTypes";
import { LoadUserAction } from "../../Interfaces/LoadUserActionInterface";
import { EmptyObject } from "redux";

const userReducer = (
  user: User | EmptyObject = {},
  action: LoadUserAction | EmptyObject = {}
): User | EmptyObject => {
  let newUser;

  switch ((action as LoadUserAction).type) {
    case actionsTypes.loadUser:
      newUser = { ...(action as LoadUserAction).user };
      break;
    default:
      newUser = { ...user };
      break;
  }
  return newUser;
};

export default userReducer;
