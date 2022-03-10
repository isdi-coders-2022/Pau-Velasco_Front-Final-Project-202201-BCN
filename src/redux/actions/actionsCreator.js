import actionsTypes from "./actionsTypes";

export const loadUserAction = (user) => ({
  type: actionsTypes.loadUser,
  user,
});
