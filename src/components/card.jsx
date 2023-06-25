function Card(props) {
  return (
    <div
      className="card"
      style={{ backgroundImage: `url(${"/assets/controller.png"})` }}
    >
      {props.data && (
        <>
          <div className="card-image">
            <img src={"/assets/game1.jpg"}></img>
          </div>
          <div className="card-details">
            <h2>{props.data.title}</h2>
            <p>{props.data.description}</p>
            <div className="card-value">
              <img src={"/assets/coins.png"} />
              <p>{`${props.data.price} Gil`}</p>
            </div>
            <button
              className={`${!props.visible ? "btn-disabled" : null}`}
              onClick={() => {
                if (props.visible) {
                  props.handleClick(props.data);
                }
              }}
            >
              Add to Cart
            </button>
          </div>
        </>
      )}
      {!props.data && <p>No Data</p>}
    </div>
  );
}

export default Card;
