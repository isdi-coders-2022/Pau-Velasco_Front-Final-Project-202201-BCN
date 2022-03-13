import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import PlayerCard from "../components/PlayerCard/PlayerCard";
import { Player } from "../Interfaces/PlayerInterface";
import { State } from "../Interfaces/StateInterface";
import {
  deletePlayerThunk,
  loadPlayersThunk,
} from "../redux/thunks/playersThunk";
import { loadUserThunk } from "../redux/thunks/userThunks";

const MainPageContainer = styled.div`
  background: linear-gradient(193.32deg, #14213d 45.83%, #000000 100%);
  width: 100%;
  min-height: 100vh;
  padding: 7px;

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
  justify-content: space-around;
`;

const MainPage = (): JSX.Element => {
  const user = useSelector((state: State) => state.user);
  const players = useSelector((state: State) => state.players);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserThunk());
    dispatch(loadPlayersThunk());
  }, [dispatch]);

  return (
    <>
      <MainPageContainer>
        <h2>{user.teamName}</h2>
        <PlayersContainer>
          {players.map((player: Player) => (
            <PlayerCard
              player={player}
              actionOnClick={() => {
                dispatch(deletePlayerThunk(player.id));
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
