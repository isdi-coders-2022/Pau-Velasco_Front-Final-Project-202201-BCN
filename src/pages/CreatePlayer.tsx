import PlayerForm from "../components/PlayerForm/PlayerForm";
import { createPlayerThunk } from "../redux/thunks/playersThunk";
import { createFeedback, notCreateFeedback } from "../utils/toasty";

const CreatePlayer = () => {
  return (
    <PlayerForm
      heading={"añade un nuevo jugador a tu equipo"}
      goodFeedback={createFeedback}
      badFeedback={notCreateFeedback}
      thunkFunction={createPlayerThunk}
    />
  );
};

export default CreatePlayer;
