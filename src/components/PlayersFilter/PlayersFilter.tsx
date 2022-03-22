import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterPlayersThunk } from "../../redux/thunks/playersThunk";

const PlayersFilter = () => {
  const dispatch = useDispatch();

  const [position, setPosition] = useState("");

  const changeData = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPosition(event.target.value);
    dispatch(filterPlayersThunk(position));
  };

  return (
    <form>
      <select id="position" value={position} onChange={changeData}>
        <option value="">TODOS</option>
        <option value="portero">PORTERO</option>
        <option value="cierre">CIERRE</option>
        <option value="alero">ALERO</option>
        <option value="pívote">PÍVOTE</option>
      </select>
    </form>
  );
};

export default PlayersFilter;
