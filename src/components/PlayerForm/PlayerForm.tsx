import { CreatedPlayer } from "../../Interfaces/PlayerInterface";
import { useState } from "react";

const PlayerForm = () => {
  const blankFields: CreatedPlayer = {
    name: "",
    number: 0,
    photo: "",
    goals: 0,
    assists: 0,
    yellowCards: 0,
    redCards: 0,
    totalMatches: 0,
    position: "",
  };
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
  };

  return (
    <>
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
              accept=".png .jpg"
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
    </>
  );
};
