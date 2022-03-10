import styled from "styled-components";
import PlayerCard from "../components/PlayerCard/PlayerCard";

const players = [
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
  },
];

const MainPageContainer = styled.div`
  background: linear-gradient(193.32deg, #14213d 45.83%, #000000 100%);
  width: 100;
  min-height: 100vh;
  padding: 7px;

  & h2 {
    font-weight: 800;
    font-size: 18px;
    line-height: 40px;
    height: 40px;
    text-align: center;
    margin: 0;
    background-color: #fca311;
    margin-bottom: 30px;
  }
`;

const MainPage = (): JSX.Element => {
  return (
    <>
      <MainPageContainer>
        <h2>NOMBRE DEL EQUIPO</h2>
        {players.map((player) => (
          <PlayerCard player={player} actionOnClick={() => {}} />
        ))}
      </MainPageContainer>
    </>
  );
};

export default MainPage;
