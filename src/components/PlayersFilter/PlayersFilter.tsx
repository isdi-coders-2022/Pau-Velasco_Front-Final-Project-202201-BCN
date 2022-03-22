import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { filterPlayersThunk } from "../../redux/thunks/playersThunk";

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  & select {
    background-color: #fff;
    border: none;
    height: 30px;
    width: 350px;
    font-size: 18px;
    margin-left: 10px;
    border-radius: 1px;
    text-align: center;
    margin: 0;
    :focus-visible {
      border: 2px solid #fca311;
    }
  }
`;

const PlayersFilter = () => {
  const dispatch = useDispatch();

  const [position, setPosition] = useState("");

  const changeData = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPosition(event.target.value);
    dispatch(filterPlayersThunk(event.target.value));
  };

  return (
    <FormContainer>
      <select id="position" value={position} onChange={changeData}>
        <option value="">TODOS</option>
        <option value="portero">PORTERO</option>
        <option value="cierre">CIERRE</option>
        <option value="alero">ALERO</option>
        <option value="pívote">PÍVOTE</option>
      </select>
    </FormContainer>
  );
};

export default PlayersFilter;
