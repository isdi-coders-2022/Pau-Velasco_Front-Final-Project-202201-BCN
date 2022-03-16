import PlayerForm from "../components/PlayerForm/PlayerForm";
import { createPlayerThunk } from "../redux/thunks/playersThunk";
import { createFeedback, notCreateFeedback } from "../utils/toasty";

const CreatePlayer = () => {
  return (
    <PlayerForm
      heading={"añade un nuevo jugador a tu equipo"}
      goodFeedback={createFeedback}
      badFeedbaack={notCreateFeedback}
      thunk={createPlayerThunk}
    />
  );
};

export default CreatePlayer;
