import {
  faFutbol,
  faLocationCrosshairs,
  faPlay,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CreatedPlayer, Player } from "../../Interfaces/PlayerInterface";
import { createPlayerThunk } from "../../redux/thunks/playersThunk";
import { blankFields, updateBlankFields } from "../../utils/blankFields";
import GenericButton from "../GenericButton/GenericButton";

interface StyleProps {
  marginLabel?: string;
  marginInput?: string;
}

const FormContainer = styled.div`
  background: linear-gradient(193.32deg, #14213d 45.83%, #000000 100%);
  width: 100%;
  min-height: 100vh;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  font-weight: 100;
  line-height: 18px;
  padding: 20px;

  & input {
    height: 30px;
    width: 100vw;
    max-width: 320px;
    padding: 0 10px;
    outline: none;
    text-transform: uppercase;
    :focus-visible {
      border: 2px solid #fca311;
    }
  }

  & form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  & button {
    margin-top: 70px;
  }

  & h2 {
    font-size: 18px;
    font-weight: 800;
    text-transform: lowercase;
    padding: 25px 0;
  }
`;

const PlayerNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  & input {
    width: 100vw;
    max-width: 320px;
  }
`;

const DorsalFotoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 2px solid #fca311;
  width: 100%;

  & div {
    display: flex;
    flex-direction: column;
  }
`;

const InputDorsalContainer = styled.div`
  display: flex;
  flex-direction: column;
  & label {
  }
  & input {
    width: 70px;
    max-width: 320px;
    text-align: center;
  }
`;

const InputNumberContainer = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
  & label {
    margin-left: ${(props) => props.marginLabel || "30px"};
  }
  & select {
    margin-left: 10px;
    border-radius: 1px;
  }
  & input {
    width: 70px;
    max-width: 320px;
    text-align: center;
    margin-left: ${(props) => props.marginInput || "10px"};
  }
  & select {
    background-color: #fff;
    border: none;
    height: 30px;
    font-size: 18px;
  }
`;

const YellowRedCard = styled.span`
  width: 15px;
  height: 22px;
  position: relative;
  top: 5px;
  background-color: ${(props) => props.color};
`;

const InputFileContainer = styled.div<StyleProps>`
  position: relative;
  display: inline-block;
  ::before {
    background-color: #fca311;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    content: "SUBIR ARCHIVO";
    font-size: 12px;
    font-weight: 500;
    color: #000;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  & input {
    opacity: 0;
    width: 100px;
    height: 32px;
    display: inline-block;
  }
`;

const LineInputsContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding-top: 45px;
  width: 100%;
`;

const RedYellowCardContainer = styled.div`
  display: flex;
`;

interface PlayerFormProps {
  heading: string;
  goodFeedback: (name: string) => void;
  badFeedback: (name: string) => void;
  thunkFunction: (player: CreatedPlayer, id?: string) => any;
  id?: string;
  playerToUpdate?: Player;
}

const PlayerForm = ({
  heading,
  goodFeedback,
  badFeedback,
  thunkFunction,
  id,
  playerToUpdate,
}: PlayerFormProps): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(
    id ? updateBlankFields(playerToUpdate) : blankFields
  );
  const isInvalid =
    formData.name === "" ||
    formData.number === null ||
    formData.photo === "" ||
    formData.goals === null ||
    formData.assists === null ||
    formData.yellowCards === null ||
    formData.redCards === null ||
    formData.totalMatches === null ||
    formData.position === "";

  const changeData = (
    event:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    if (Number(event.target.value) > 99 || Number(event.target.value) < 0) {
      return;
    }
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };
  const changeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]: (event.target.files as FileList)[0],
    });
  };

  const submitForm = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = formData;
    setFormData(blankFields);
    const returnDispatch = await dispatch(
      thunkFunction === createPlayerThunk
        ? thunkFunction(data)
        : thunkFunction(data, id)
    );

    if (!returnDispatch.error) {
      goodFeedback(formData.name);
      navigate("/");
    } else {
      badFeedback(formData.name);
    }
  };

  return (
    <>
      <FormContainer>
        <h2>{heading}</h2>
        <form noValidate autoComplete="off" onSubmit={submitForm}>
          <PlayerNameContainer>
            <label htmlFor="name">NOMBRE DEL JUGADOR</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={changeData}
              minLength={3}
              maxLength={20}
            />
          </PlayerNameContainer>
          <DorsalFotoContainer>
            <InputDorsalContainer>
              <label htmlFor="number">DORSAL</label>
              <input
                type="number"
                id="number"
                value={formData.number}
                onChange={changeData}
                min={0}
                max={99}
              />
            </InputDorsalContainer>
            <div>
              <label htmlFor="photo">FOTO</label>
              <InputFileContainer marginLabel="1px">
                <input
                  type="file"
                  id="photo"
                  onChange={changeFile}
                  accept="image/*"
                />
              </InputFileContainer>
            </div>
          </DorsalFotoContainer>
          <LineInputsContainer>
            <InputNumberContainer marginInput="7px" marginLabel="27px">
              <label htmlFor="goals">GOLES</label>
              <div>
                <FontAwesomeIcon icon={faFutbol} color="#fca311" />
                <input
                  type="number"
                  id="goals"
                  value={formData.goals}
                  onChange={changeData}
                  min={0}
                  max={99}
                />
              </div>
            </InputNumberContainer>
            <InputNumberContainer marginLabel="27px">
              <label htmlFor="assists">ASSISTS</label>
              <div>
                <FontAwesomeIcon icon={faShareNodes} color="#fca311" />
                <input
                  type="number"
                  id="assists"
                  value={formData.assists}
                  onChange={changeData}
                  min={0}
                  max={99}
                />
              </div>
            </InputNumberContainer>
          </LineInputsContainer>
          <LineInputsContainer>
            <InputNumberContainer marginLabel="27px">
              <label htmlFor="yellowCards">AMARIL</label>
              <RedYellowCardContainer>
                <YellowRedCard color="#faff00"></YellowRedCard>
                <input
                  type="number"
                  id="yellowCards"
                  value={formData.yellowCards}
                  onChange={changeData}
                  min={0}
                  max={99}
                />
              </RedYellowCardContainer>
            </InputNumberContainer>
            <InputNumberContainer marginLabel="25px">
              <label htmlFor="redCards">ROJAS</label>
              <RedYellowCardContainer>
                <YellowRedCard color="#ff0000"></YellowRedCard>
                <input
                  type="number"
                  id="redCards"
                  value={formData.redCards}
                  onChange={changeData}
                  min={0}
                  max={99}
                />
              </RedYellowCardContainer>
            </InputNumberContainer>
          </LineInputsContainer>
          <LineInputsContainer>
            <InputNumberContainer marginLabel="25px">
              <label htmlFor="totalMatches">P. JUGADOS</label>
              <div>
                <FontAwesomeIcon icon={faPlay} color="#fca311" />
                <input
                  type="number"
                  id="totalMatches"
                  value={formData.totalMatches}
                  onChange={changeData}
                  min={0}
                  max={99}
                />
              </div>
            </InputNumberContainer>
            <InputNumberContainer>
              <label htmlFor="position">POSICIÓN</label>
              <div>
                <FontAwesomeIcon icon={faLocationCrosshairs} color="#fca311" />
                <select
                  id="position"
                  value={formData.position}
                  onChange={changeData}
                >
                  <option value="">POSICION</option>
                  <option value="portero">PORTERO</option>
                  <option value="cierre">CIERRE</option>
                  <option value="alero">ALERO</option>
                  <option value="pívote">PÍVOTE</option>
                </select>
              </div>
            </InputNumberContainer>
          </LineInputsContainer>
          <GenericButton text={id ? "EDITAR" : "CREAR"} disabled={isInvalid} />
        </form>
      </FormContainer>
    </>
  );
};

export default PlayerForm;
