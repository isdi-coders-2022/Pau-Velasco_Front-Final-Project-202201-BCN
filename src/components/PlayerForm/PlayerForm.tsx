import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPlayerThunk } from "../../redux/thunks/playersThunk";
import blankFields from "../../utils/blankFields";

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

  const changeData = (event: React.ChangeEvent<HTMLInputElement>) => {
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
      <div>
        <h2>{heading}</h2>
        <form noValidate autoComplete="off" onSubmit={submitForm}>
          <div>
            <div>
              <label htmlFor="name">NOMBRE DEL JUGADOR</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={changeData}
              />
            </div>
            <div>
              <label htmlFor="number">DORSAL</label>
              <input
                type="number"
                id="number"
                value={formData.number}
                onChange={changeData}
              />
            </div>
            <div>
              <label htmlFor="photo"></label>
              <input
                type="file"
                id="photo"
                onChange={changeFile}
                accept="image/*"
              />
            </div>
          </div>
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
              <input
                type="text"
                id="position"
                value={formData.position}
                onChange={changeData}
              />
            </div>
          </div>
          <button type="submit" disabled={isInvalid}>
            CREAR
          </button>
        </form>
      </div>
    </>
  );
};

export default PlayerForm;
