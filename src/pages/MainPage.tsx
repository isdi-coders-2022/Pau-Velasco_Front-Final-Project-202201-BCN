import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PlayerCard from "../components/PlayerCard/PlayerCard";
import PlayersFilter from "../components/PlayersFilter/PlayersFilter";
import { Player } from "../Interfaces/PlayerInterface";
import { State } from "../Interfaces/StateInterface";
import {
  deletePlayerThunk,
  loadPlayersThunk,
} from "../redux/thunks/playersThunk";
import { loadUserThunk } from "../redux/thunks/userThunks";
import { deleteFeedback } from "../utils/toasty";

const MainPageContainer = styled.div`
  background: linear-gradient(193.32deg, #14213d 45.83%, #000000 100%);
  width: 100%;
  min-height: 100vh;
  padding: 7px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  & h2 {
    font-weight: 800;
    font-size: 18px;
    line-height: 40px;
    height: 40px;
    text-align: center;
    margin: 0;
    background-color: #fca311;
    margin-bottom: 30px;
    text-transform: uppercase;
  }
`;

const PlayersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const MainPage = (): JSX.Element => {
  const navigate = useNavigate();

  const user = useSelector((state: State) => state.user);
  const players = useSelector((state: State) => state.players);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    dispatch(loadUserThunk());
    dispatch(loadPlayersThunk());
  }, [dispatch, navigate]);

  return (
    <>
      <MainPageContainer>
        <h2>{user.teamName}</h2>
        <PlayersFilter />
        <PlayersContainer>
          {players.map((player: Player) => (
            <PlayerCard
              player={player}
              actionOnClick={() => {
                dispatch(deletePlayerThunk(player.id));
                deleteFeedback(player.name);
              }}
              key={player.id}
            />
          ))}
        </PlayersContainer>
      </MainPageContainer>
    </>
  );
};

export default MainPage;
