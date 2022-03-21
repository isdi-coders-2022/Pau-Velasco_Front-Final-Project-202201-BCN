import { RegisteredUser, RegiterUser } from "../Interfaces/UserInterface";

const url: any = process.env.REACT_APP_API_RENDER;

export const registerUser = async (newUser: RegiterUser): Promise<any> => {
  const response = await fetch(`${url}user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });

  const isError: RegisteredUser = await response.json();

  if (isError.username) {
    return;
  } else {
    return isError;
  }
};
