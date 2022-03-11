import { rest } from "msw";

export const handlers = [
  rest.get(
    `${process.env.REACT_APP_API_RENDER}user/load-user`,
    (req, res, ctx) =>
      res(
        ctx.status(200),
        ctx.json({
          username: "Cristiano",
          teamName: "Man U",
          password: "afjdsk",
          players: [],
          id: "1",
        })
      )
  ),
];
