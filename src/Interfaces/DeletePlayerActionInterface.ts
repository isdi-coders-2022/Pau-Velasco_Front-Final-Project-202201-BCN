import ObjectID from "bson-objectid";
import { Action } from "./ActionInterface";

export interface DeletePlayerAction extends Action {
  id: ObjectID;
}
