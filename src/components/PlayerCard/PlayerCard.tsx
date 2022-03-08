import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: grey;
  padding: 10px;
  display: flex;
  border-radius: 3px;

  & img {
    width: 50px;
    height: 60px;
    object-fit: cover;
    border-radius: 5px;
    filter: drop-shadow(4px 0 4px #0000003f);
  }

  & p {
    margin: 0;
    font-size: 18px;
    font-weight: 900;
  }

  & div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const PlayerCard = (): JSX.Element => {
  return (
    <>
      <section>
        <HeaderContainer>
          <img
            src="https://img.uefa.com/imgml/TP/players/1/2022/324x324/63706.jpg?imwidth=36"
            alt=""
          />
          <div>
            <p>RONALDO</p>
            <p>DORSAL: 7</p>
          </div>
        </HeaderContainer>
      </section>
    </>
  );
};

export default PlayerCard;
