function ShowGame(props) {
  return (
    <div className="showGame">
      <div className="gameDetails">
        <img id="gameImage" src={props.image} />
        <div>
          <h3>{props.title}</h3>
          <span>
            <img src={"/assets/coins.png"} /> <h5>{props.value}</h5>
          </span>
        </div>
      </div>
      <div
        className="bin"
        onClick={() => {
          props.handleDelete(props.id);
        }}
      >
        <img src={"/assets/bin.png"} />
      </div>
    </div>
  );
}

export default ShowGame;
