import "./sass/styles.scss";
import Header from "./components/header";
import Store from "./pages/Store";
import { useState } from "react";
import Checkout from "./pages/Checkout";
import Cart from "./components/cart";

function App() {
  const [chosenProducts, setChosenProducts] = useState([]);
  const [toggleCart, setToggleCart] = useState(true);
  const [isCheckout, setIsCheckout] = useState(false);
  //for checkout and store, we could create different pages

  const handleRemoveProducts = (id) => {
    if (chosenProducts) {
      const products = chosenProducts.filter((games) => games.id !== id);
      setChosenProducts(products);
    }
  };

  return (
    <div className="App">
      <Header
        phone={"1337 1337 1337"}
        flagText={"Try Another Castle"}
        count={chosenProducts.length}
        setToggleCart={setToggleCart}
      />
      {isCheckout && (
        <Checkout
          chosenProducts={chosenProducts}
          setChosenProducts={setChosenProducts}
          setIsCheckout={setIsCheckout}
          handleRemoveProducts={handleRemoveProducts}
        />
      )}
      {!isCheckout && (
        <Store
          chosenProducts={chosenProducts}
          setChosenProducts={setChosenProducts}
        />
      )}
      <Cart
        products={chosenProducts}
        closed={toggleCart}
        toggleView={setToggleCart}
        toggleCheckout={setIsCheckout}
        setChosenProducts={setChosenProducts}
        handleRemoveProducts={handleRemoveProducts}
      />
    </div>
  );
}

export default App;
