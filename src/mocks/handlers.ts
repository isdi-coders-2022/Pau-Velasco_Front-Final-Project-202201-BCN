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
            redCards: 9,
            totalMatches: 21,
            position: "Alero",
            photo:
              "https://img.uefa.com/imgml/TP/players/1/2022/324x324/63706.jpg?imwidth=36",
            id: "1",
          },
          {
            name: "Messi",
            number: 10,
            goals: 43,
            assists: 2,
            yellowCards: 6,
            redCards: 1,
            totalMatches: 24,
            position: "Cierre",
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

  rest.post(
    `${process.env.REACT_APP_API_RENDER}player/create-player`,
    (req, res, ctx) =>
      res(
        ctx.status(201),
        ctx.json({
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
        })
      )
  ),

  rest.put(
    `${process.env.REACT_APP_API_RENDER}player/update/1`,
    (req, res, ctx) =>
      res(
        ctx.status(201),
        ctx.json({
          name: "Cristiano",
          number: "1",
          goals: "1",
          assists: "1",
          yellowCards: "1",
          redCards: "1",
          totalMatches: "1",
          position: "Alero",
          photo: "Crsitiano.jpg",
          id: "12",
        })
      )
  ),

  rest.post(`${process.env.REACT_APP_API_RENDER}user/login`, (req, res, ctx) =>
    res(
      ctx.status(201),
      ctx.json({
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
      })
    )
  ),

  rest.post(
    `${process.env.REACT_APP_API_RENDER}user/register`,
    (req, res, ctx) =>
      res(
        ctx.status(201),
        ctx.json({
          username: "cristianito",
          password: "thebest",
          teamName: "manU",
        })
      )
  ),
];
