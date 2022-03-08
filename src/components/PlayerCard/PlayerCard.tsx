import { faPlayCircle, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import {
  faFutbol,
  faLocationCrosshairs,
  faPencil,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: #fff;
  padding: 10px;
  display: flex;
  border-radius: 3px;
  max-width: 350px;

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
    margin-left: 10px;
  }
`;

const StatsContainer = styled.div`
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
  max-width: 350px;
  padding: 5px 15px;
  margin: 0;

  & ul {
    margin: 0;
    padding: 0;
  }
  & li {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    padding: 5px;
    margin-top: 5px;
    height: 35px;
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    & p {
      margin: 0;
    }

    & svg {
      position: absolute;
      left: 15px;
      font-size: 20px;
    }
  }
`;

const YellowCard = styled.figure`
  background-color: #faff00;
  width: 15px;
  height: 22px;
  position: absolute;
  left: 15px;
  margin: 0px;
  border: 0.1px solid black;
`;

const RedCard = styled.figure`
  background-color: #ff0000;
  width: 15px;
  height: 22px;
  position: absolute;
  left: 15px;
  margin: 0px;
  border: 0.1px solid black;
`;

const Options = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 24px;

  & svg {
    padding: 10px;
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
        <StatsContainer>
          <ul>
            <li>
              <FontAwesomeIcon icon={faFutbol} />
              <p>GOLES: 12</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faShareNodes} />
              <p>ASSISTENCIAS: 7</p>
            </li>
            <li>
              <YellowCard />
              <p>TARJETAS AMARILLAS: 2</p>
            </li>
            <li>
              <RedCard />
              <p>TARJETAS ROJAS: 0</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faPlayCircle} />
              <p>PARTIDOS JUGADOS: 21</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faLocationCrosshairs} />
              <p>POSICION: ALERO</p>
            </li>
          </ul>
          <Options>
            <FontAwesomeIcon icon={faPencil} />
            <FontAwesomeIcon icon={faTrashCan} />
          </Options>
        </StatsContainer>
      </section>
    </>
  );
};

export default PlayerCard;
