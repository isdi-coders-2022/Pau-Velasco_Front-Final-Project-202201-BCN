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
  rest.get(
    `${process.env.REACT_APP_API_RENDER}user/load-user-players`,
    (req, res, ctx) =>
      res(
        ctx.status(200),
        ctx.json([
          {
            name: "Cristiano",
            number: 7,
            goals: 21,
            assists: 3,
            yellowCards: 4,
            redCards: 1,
            totalMatches: 21,
            position: "Alero",
            photo:
              "https://img.uefa.com/imgml/TP/players/1/2022/324x324/63706.jpg?imwidth=36",
            id: "1",
          },
          {
            name: "Cristiano",
            number: 7,
            goals: 21,
            assists: 3,
            yellowCards: 4,
            redCards: 1,
            totalMatches: 21,
            position: "Alero",
            photo:
              "https://img.uefa.com/imgml/TP/players/1/2022/324x324/63706.jpg?imwidth=36",
            id: "2",
          },
        ])
      )
  ),

  rest.delete(
    `${process.env.REACT_APP_API_RENDER}player/delete/1`,
    (req, res, ctx) =>
      res(
        ctx.status(200),
        ctx.json([
          {
            name: "Cristiano",
            number: 7,
            goals: 21,
            assists: 3,
            yellowCards: 4,
            redCards: 1,
            totalMatches: 21,
            position: "Alero",
            photo:
              "https://img.uefa.com/imgml/TP/players/1/2022/324x324/63706.jpg?imwidth=36",
            id: "2",
          },
        ])
      )
  ),
];
