import faker from "@faker-js/faker";
import ObjectID from "bson-objectid";
import { Factory } from "fishery";
import { User } from "../Interfaces/UserInterface";

const userFactory = Factory.define<User>(() => ({
  username: faker.name.findName(),
  teamName: faker.name.title(),
  password: faker.internet.password(),
  players: [],
  id: ObjectID().toHexString(),
}));
