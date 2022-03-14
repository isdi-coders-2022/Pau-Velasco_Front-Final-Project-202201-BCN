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

  const changeData = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };
  return (
    <>
      <form noValidate autoComplete="off">
        <div>
          <div>
            <label htmlFor="name">NOMBRE DEL JUGADOR</label>
            <input type="text" id="name" />
          </div>
          <div>
            <label htmlFor="number">DORSAL</label>
            <input type="number" id="number" />
          </div>
          <div>
            <label htmlFor="photo"></label>
            <input type="file" id="photo" name="photo" />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="goals">GOLES</label>
            <input type="number" id="goals" />
          </div>
          <div>
            <label htmlFor="assists">ASSISTS</label>
            <input type="number" id="assists" />
          </div>
          <div>
            <label htmlFor="yellowCards">AMARIL</label>
            <input type="number" id="yellowCards" />
          </div>
          <div>
            <label htmlFor="redCards">ROJAS</label>
            <input type="number" id="redCards" />
          </div>
          <div>
            <label htmlFor="totalMatches">P. JUGADOS</label>
            <input type="number" id="totalMatches" />
          </div>
          <div>
            <label htmlFor="position">POSICIÓN</label>
            <input type="text" id="position" />
          </div>
        </div>
      </form>
    </>
  );
};
