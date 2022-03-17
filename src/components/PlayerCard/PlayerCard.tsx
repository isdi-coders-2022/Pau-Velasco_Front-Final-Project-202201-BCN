import { faPlayCircle, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import {
  faFutbol,
  faLocationCrosshairs,
  faPencil,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Player } from "../../Interfaces/PlayerInterface";

const CardContainer = styled.section`
  margin-top: 24px;
`;

const HeaderContainer = styled.div`
  background-color: #fff;
  padding: 10px;
  display: flex;
  border-radius: 3px 3px 0 0;
  width: 350px;
  text-transform: uppercase;

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
  text-transform: uppercase;

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
    cursor: pointer;
  }

  & a {
    color: #000;
  }
`;

interface PlayerCardProps {
  actionOnClick: () => void;
  player: Player;
}

const PlayerCard = ({
  actionOnClick,
  player: {
    name,
    number,
    goals,
    assists,
    yellowCards,
    redCards,
    totalMatches,
    position,
    photo,
  },
}: PlayerCardProps): JSX.Element => {
  return (
    <>
      <CardContainer>
        <HeaderContainer>
          <img src={photo} alt={name} />
          <div>
            <p>{name}</p>
            <p>DORSAL: {number}</p>
          </div>
        </HeaderContainer>
        <StatsContainer>
          <ul>
            <li>
              <FontAwesomeIcon icon={faFutbol} />
              <p>GOLES: {goals}</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faShareNodes} />
              <p>ASSISTENCIAS: {assists}</p>
            </li>
            <li>
              <YellowCard />
              <p>TARJETAS AMARILLAS: {yellowCards}</p>
            </li>
            <li>
              <RedCard />
              <p>TARJETAS ROJAS: {redCards}</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faPlayCircle} />
              <p>PARTIDOS JUGADOS: {totalMatches}</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faLocationCrosshairs} />
              <p>POSICIóN: {position}</p>
            </li>
          </ul>
          <Options>
            <Link to="/edit-player">
              <FontAwesomeIcon icon={faPencil} />
            </Link>
            <FontAwesomeIcon
              icon={faTrashCan}
              onClick={actionOnClick}
              title="trash"
            />
          </Options>
        </StatsContainer>
      </CardContainer>
    </>
  );
};

export default PlayerCard;
