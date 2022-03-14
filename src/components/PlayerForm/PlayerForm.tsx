const PlayerForm = () => {
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
            <input type="number" id="position" />
          </div>
        </div>
      </form>
    </>
  );
};
