import { useEffect, useState } from "react";
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
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;

  & button {
    margin: 30px;
    border: none;
    background-color: inherit;
    font-size: 18px;
    font-weight: 800;
    color: #fca311;
    cursor: pointer;
  }

  & h2 {
    font-weight: 800;
    width: 100%;
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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state: State) => state.user);
  const players = useSelector((state: State) => state.players);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    dispatch(loadUserThunk());
    dispatch(loadPlayersThunk());
  }, [dispatch, navigate]);

  const questionsPerPage = 6;
  const pages = [];
  const numPages = Math.ceil(players.length / questionsPerPage);

  if (players.length > questionsPerPage) {
    let currentOffset = 0;

    for (let i = 0; i < numPages; i++) {
      const pageQuestions = players.slice(0, currentOffset + questionsPerPage);
      pages.push(pageQuestions);
      currentOffset += questionsPerPage;
    }
  } else {
    pages.push(players);
  }

  const [currentPage, setCurrentPage] = useState(0);
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <MainPageContainer>
        <section>
          <h2>{user.teamName}</h2>
          <PlayersFilter />
        </section>
        <PlayersContainer>
          {pages[currentPage].map((player: Player) => (
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
        {currentPage + 1 !== numPages && numPages !== 0 ? (
          <button
            onClick={() => {
              nextPage();
            }}
          >
            VER MÁS
          </button>
        ) : (
          <></>
        )}
      </MainPageContainer>
    </>
  );
};

export default MainPage;
