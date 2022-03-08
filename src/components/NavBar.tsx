import {
  faArrowRightToBracket,
  faUserPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const ListItem = styled.li`
  list-style: none;
`;

const ListContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const NavigationContainer = styled.nav`
  height: 50px;
  display: flex;
  justify-content: center;
  background-color: grey;
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
            <FontAwesomeIcon icon={faArrowRightToBracket} />
          </ListItem>
          <ListItem>
            <FontAwesomeIcon icon={faUsers} />
          </ListItem>
          <ListItem>
            <FontAwesomeIcon icon={faUserPlus} />
          </ListItem>
        </ListContainer>
      </NavigationContainer>
    </>
  );
};

export default NavBar;
