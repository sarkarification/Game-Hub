import ShowGames from "./showGames";

function Cart(props) {
  return (
    <div className={`cart ${props.closed ? "closed" : ""}`}>
      <div id="cart-heading">
        <div
          id="cart-close"
          onClick={() => {
            props.toggleView((prevState) => !prevState);
          }}
        >
          X
        </div>
        <h1 style={{ alignSelf: "flex-start" }}>Basket</h1>
      </div>
      {props.products && props.products.length > 0 ? (
        <ShowGames
          products={props.products}
          handleDelete={props.handleRemoveProducts}
        />
      ) : (
        <h2>No Data</h2>
      )}
      {props.products && props.products.length > 0 ? (
        <span>
          Total{" "}
          <h4>
            {props.products &&
              props.products.reduce(
                (accumulator, c) => accumulator + c.price,
                0
              )}
          </h4>
        </span>
      ) : null}

      <button
        onClick={() => {
          if (props.products && props.products.length > 0) {
            props.toggleCheckout((prevState) => !prevState);
            props.toggleView((prevState) => !prevState);
          }
        }}
        className={`${
          props.products && props.products.length > 0 ? "" : "btn-disabled"
        }`}
      >
        Continue
      </button>
    </div>
  );
}

export default Cart;
