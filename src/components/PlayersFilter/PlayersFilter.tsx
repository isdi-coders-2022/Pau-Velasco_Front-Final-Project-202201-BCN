import { useState } from "react";

const PlayersFilter = () => {
  const blankFields = {
    position: "",
  };

  const [formData, setFormData] = useState(blankFields);

  const changeData = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  return (
    <select id="position" value={formData.position} onChange={changeData}>
      <option value="">POSICION</option>
      <option value="portero">PORTERO</option>
      <option value="cierre">CIERRE</option>
      <option value="alero">ALERO</option>
      <option value="pívote">PÍVOTE</option>
    </select>
  );
};

export default PlayersFilter;
