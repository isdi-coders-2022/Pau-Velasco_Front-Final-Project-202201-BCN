import {
  faArrowRightToBracket,
  faUserPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ListItem = styled.li`
  list-style: none;
  @media (min-width: 400px) {
    display: flex;
    flex-direction: row;
  }

  & p {
    margin: 0;
    padding-left: 10px;
    display: none;
    @media (min-width: 400px) {
      flex-direction: column;
      justify-content: flex-start;
      width: 25%;
      min-height: 100vh;
      display: contents;
      padding-left: 10px;
    }
  }
  & a {
    color: #000;
  }
  & svg {
    @media (min-width: 400px) {
      padding-right: 20px;
    }
  }
`;

const ListContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
  @media (min-width: 400px) {
    flex-direction: column;
    height: 300px;
    align-items: flex-start;
    padding-left: 30px;
  }
`;

const NavigationContainer = styled.nav`
  height: 50px;
  min-width: 200px;
  display: flex;
  justify-content: center;
  @media (min-width: 400px) {
    flex-direction: column;
    justify-content: flex-start;
    width: 25%;
    min-height: 100vh;
  }
`;

const NavBar = (): JSX.Element => {
  return (
    <>
      <NavigationContainer>
        <ListContainer>
          <ListItem>
            <Link to="/login">
              <FontAwesomeIcon icon={faArrowRightToBracket} />
              <p>logout</p>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/main-page">
              <FontAwesomeIcon icon={faUsers} />
              <p>mi equipo</p>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/create-player">
              <FontAwesomeIcon icon={faUserPlus} />
              <p>añadir jugador</p>
            </Link>
          </ListItem>
        </ListContainer>
      </NavigationContainer>
    </>
  );
};

export default NavBar;
