import styled from "styled-components";

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
`;

const MainPage = () => {
  return (
    <>
      <MainPageContainer></MainPageContainer>
    </>
  );
};

export default MainPage;
