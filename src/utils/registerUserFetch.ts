import { RegisteredUser, RegisterUser } from "../Interfaces/UserInterface";

const url: any = process.env.REACT_APP_API_RENDER;

export const registerUser = async (newUser: RegisterUser): Promise<any> => {
  const response = await fetch(`${url}user/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });

  const isError: RegisteredUser = await response.json();

  return isError;
};
