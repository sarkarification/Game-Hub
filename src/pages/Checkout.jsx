import ShowGames from "../components/showGames";

function Checkout(props) {
  return (
    <div className="Checkout">
      <button
        onClick={() => {
          props.setIsCheckout((prevState) => !prevState);
        }}
      >
        Go Back
      </button>
      <ShowGames
        products={props.chosenProducts}
        handleDelete={props.handleRemoveProducts}
      />
      <span>
        Total{" "}
        <h4>
          {props.chosenProducts &&
            props.chosenProducts.reduce(
              (accumulator, c) => accumulator + c.price,
              0
            )}
        </h4>
      </span>
    </div>
  );
}

export default Checkout;
