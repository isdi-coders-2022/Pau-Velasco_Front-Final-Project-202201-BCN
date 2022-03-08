import {
  faArrowRightToBracket,
  faUserPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = (): JSX.Element => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <FontAwesomeIcon icon={faUsers} />
          </li>
          <li>
            <FontAwesomeIcon icon={faArrowRightToBracket} />
          </li>
          <li>
            <FontAwesomeIcon icon={faUserPlus} />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
