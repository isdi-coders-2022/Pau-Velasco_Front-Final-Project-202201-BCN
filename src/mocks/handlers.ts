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
          {
            name: "Eva Gleichner",
            number: 10,
            goals: 69,
            assists: 43,
            yellowCards: 14,
            redCards: 9,
            totalMatches: 37,
            position: "Alero",
            photo: "http://placeimg.com/640/480",
            id: "3",
          },
          {
            name: "Phyllis Stoltenberg",
            number: 88,
            goals: 26,
            assists: 19,
            yellowCards: 8,
            redCards: 1,
            totalMatches: 27,
            position: "Alero",
            photo: "http://placeimg.com/640/480",
            id: "4",
          },
          {
            name: "Jeremy Emard",
            number: 43,
            goals: 77,
            assists: 91,
            yellowCards: 11,
            redCards: 18,
            totalMatches: 46,
            position: "Alero",
            photo: "http://placeimg.com/640/480",
            id: "5",
          },
          {
            name: "Marlene Reichert",
            number: 33,
            goals: 82,
            assists: 82,
            yellowCards: 9,
            redCards: 7,
            totalMatches: 21,
            position: "Alero",
            photo: "http://placeimg.com/640/480",
            id: "6",
          },
          {
            name: "Dana Tillman",
            number: 9,
            goals: 97,
            assists: 93,
            yellowCards: 15,
            redCards: 18,
            totalMatches: 37,
            position: "Alero",
            photo: "http://placeimg.com/640/480",
            id: "7",
          },
          {
            name: "Pauline Pacocha II",
            number: 39,
            goals: 52,
            assists: 18,
            yellowCards: 13,
            redCards: 20,
            totalMatches: 41,
            position: "Alero",
            photo: "http://placeimg.com/640/480",
            id: "8",
          },
          {
            name: "Jenna Reichert MD",
            number: 79,
            goals: 23,
            assists: 5,
            yellowCards: 1,
            redCards: 7,
            totalMatches: 33,
            position: "Alero",
            photo: "http://placeimg.com/640/480",
            id: "9",
          },
          {
            name: "Mrs. Edwin Ward",
            number: 59,
            goals: 135,
            assists: 99,
            yellowCards: 19,
            redCards: 15,
            totalMatches: 10,
            position: "Alero",
            photo: "http://placeimg.com/640/480",
            id: "10",
          },
          {
            name: "Patti Dare",
            number: 62,
            goals: 73,
            assists: 81,
            yellowCards: 20,
            redCards: 17,
            totalMatches: 12,
            position: "Alero",
            photo: "http://placeimg.com/640/480",
            id: "11",
          },
          {
            name: "Miranda Swaniawski",
            number: 90,
            goals: 172,
            assists: 34,
            yellowCards: 5,
            redCards: 17,
            totalMatches: 21,
            position: "Alero",
            photo: "http://placeimg.com/640/480",
            id: "12",
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
