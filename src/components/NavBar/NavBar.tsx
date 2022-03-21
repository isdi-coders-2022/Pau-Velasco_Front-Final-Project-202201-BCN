import {
  faArrowRightToBracket,
  faUserPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

interface StyleProps {
  color?: string;
}

const ListItem = styled.li<StyleProps>`
  list-style: none;
  @media (min-width: 450px) {
    display: flex;
    flex-direction: row;
  }

  & p {
    margin: 0;
    padding-left: 10px;
    display: none;
    @media (min-width: 450px) {
      flex-direction: column;
      justify-content: flex-start;
      width: 25%;
      min-height: 100vh;
      display: contents;
      padding-left: 10px;
      font-weight: 800;
      font-size: 24px;
    }
  }
  & a {
    color: #000;
    text-decoration-line: none;
  }
  & svg {
    color: ${(props) => props.color};
    @media (min-width: 450px) {
      padding-right: 20px;
      font-size: 40px;
    }
  }
`;

const ListContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  margin: 0;
  padding: 0;

  @media (min-width: 450px) {
    flex-direction: column;
    height: 300px;
    align-items: flex-start;
    padding-left: 10px;
  }
`;

const NavigationContainer = styled.nav`
  height: 50px;
  min-width: 200px;
  display: flex;
  justify-content: center;
  @media (min-width: 450px) {
    flex-direction: column;
    justify-content: flex-start;
    width: 25%;
    min-height: 100vh;
    background-color: #e5e5e5;
  }
`;

const NavBar = (): JSX.Element => {
  const location = useLocation();

  return (
    <>
      <NavigationContainer>
        <ListContainer>
          <ListItem color="#000">
            <Link to="/login">
              <FontAwesomeIcon icon={faArrowRightToBracket} />
              <p>log out</p>
            </Link>
          </ListItem>
          <ListItem
            color={
              location.pathname.includes("/main-page") === true
                ? "#fca311"
                : "#000"
            }
          >
            <Link to="/main-page">
              <FontAwesomeIcon icon={faUsers} />
              <p>mi equipo</p>
            </Link>
          </ListItem>
          <ListItem
            color={location.pathname === "/create-player" ? "#fca311" : "#000"}
          >
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
