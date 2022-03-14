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
      </form>
    </>
  );
};
