import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { createPlayerThunk } from "../../redux/thunks/playersThunk";
import blankFields from "../../utils/blankFields";

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
`;

const PlayerNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  & input {
    height: 30px;
    width: 100vw;
    max-width: 320px;
    padding: 0 10px;
    outline: none;
    text-transform: uppercase;
    text-align: center;
    :focus-visible {
      border: 2px solid #fca311;
    }
  }
`;

const DorsalFotoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  & div {
    display: flex;
    flex-direction: column;
  }
`;

const InputNumberContainer = styled.div`
  & input {
    height: 30px;
    width: 70px;
    max-width: 320px;
    padding: 0 10px;
    outline: none;
    text-transform: uppercase;
    text-align: center;
    :focus-visible {
      border: 2px solid #fca311;
    }
  }
`;

const InputFileContainer = styled.div`
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

interface PlayerFormProps {
  heading: string;
}

const PlayerForm = ({ heading }: PlayerFormProps): JSX.Element => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(blankFields);
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
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };
  const changeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]: (event.target.files as FileList)[0],
    });
  };

  const submitForm = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(createPlayerThunk(formData));
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
            />
          </PlayerNameContainer>
          <DorsalFotoContainer>
            <InputNumberContainer>
              <label htmlFor="number">DORSAL</label>
              <input
                type="number"
                id="number"
                value={formData.number}
                onChange={changeData}
              />
            </InputNumberContainer>
            <div>
              <label htmlFor="photo">FOTO</label>
              <InputFileContainer>
                <input
                  type="file"
                  id="photo"
                  onChange={changeFile}
                  accept="image/*"
                />
              </InputFileContainer>
            </div>
          </DorsalFotoContainer>
          <div>
            <div>
              <label htmlFor="goals">GOLES</label>
              <input
                type="number"
                id="goals"
                value={formData.goals}
                onChange={changeData}
              />
            </div>
            <div>
              <label htmlFor="assists">ASSISTS</label>
              <input
                type="number"
                id="assists"
                value={formData.assists}
                onChange={changeData}
              />
            </div>
            <div>
              <label htmlFor="yellowCards">AMARIL</label>
              <input
                type="number"
                id="yellowCards"
                value={formData.yellowCards}
                onChange={changeData}
              />
            </div>
            <div>
              <label htmlFor="redCards">ROJAS</label>
              <input
                type="number"
                id="redCards"
                value={formData.redCards}
                onChange={changeData}
              />
            </div>
            <div>
              <label htmlFor="totalMatches">P. JUGADOS</label>
              <input
                type="number"
                id="totalMatches"
                value={formData.totalMatches}
                onChange={changeData}
              />
            </div>
            <div>
              <label htmlFor="position">POSICIÓN</label>
              <select
                id="position"
                value={formData.position}
                onChange={changeData}
              >
                <option value="portero">PORTERO</option>
                <option value="cierre">CIERRE</option>
                <option value="alero">ALERO</option>
                <option value="pívote">PÍVOTE</option>
              </select>
            </div>
          </div>
          <button type="submit" disabled={isInvalid}>
            CREAR
          </button>
        </form>
      </FormContainer>
    </>
  );
};

export default PlayerForm;
