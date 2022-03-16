import PlayerForm from "../components/PlayerForm/PlayerForm";
import { createPlayerThunk } from "../redux/thunks/playersThunk";
import { createFeedback } from "../utils/toasty";

const CreatePlayer = () => {
  return (
    <PlayerForm
      heading={"añade un nuevo jugador a tu equipo"}
      feedback={createFeedback}
      thunk={createPlayerThunk}
    />
  );
};

export default CreatePlayer;
