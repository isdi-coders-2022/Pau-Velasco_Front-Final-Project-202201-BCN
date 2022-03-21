import styled from "styled-components";

const HeaderContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 240px;
  justify-content: space-between;

  & h1 {
    font-weight: 700;
    font-size: 36px;
    color: #fff;
  }

  & img {
    width: 130px;
    height: 130px;
  }
`;

const HeaderLoginRegister = () => {
  return (
    <HeaderContainer>
      <h1>FUTSAL STATS</h1>
      <img src="Pelota-futbol.png" alt="logo balón de fútbol" />
    </HeaderContainer>
  );
};

export default HeaderLoginRegister;
