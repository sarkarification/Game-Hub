import { useEffect, useState } from "react";
import Card from "../components/card";
import { productData } from "../productData.ts";

function Store(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    //Mimicking API cal here fetch()....
    //promises returning
    //then
    setData(productData);
  }, [productData]);

  const handleAddProducts = (data) => {
    const updatedData = { ...data, isVisible: false };
    props.setChosenProducts((prevState) => [...prevState, updatedData]);
  };

  const checkVisibility = (id) => {
    return props.chosenProducts.filter((data) => data.id === id).length > 0
      ? false
      : true;
  };

  const mapData = (arrayofData) => {
    if (arrayofData) {
      const arrayofElements = [];
      for (let j = 0; j < arrayofData.length; j++) {
        if (arrayofData[j] && arrayofData[j + 1]) {
          arrayofElements.push(
            <div className="store-row" key={j}>
              <Card
                key={j}
                data={arrayofData[j]}
                handleClick={handleAddProducts}
                visible={checkVisibility(arrayofData[j].id)}
              />
              <Card
                key={j + 1}
                data={arrayofData[j + 1]}
                handleClick={handleAddProducts}
                visible={checkVisibility(arrayofData[j + 1].id)}
              />
            </div>
          );
          j++;
        } else if (arrayofData[j]) {
          arrayofElements.push(
            <div className="store-row" key={j}>
              <Card
                key={j}
                data={arrayofData[j]}
                handleClick={handleAddProducts}
                visible={checkVisibility(arrayofData[j].id)}
              />
            </div>
          );
          j++;
        }
      }
      return arrayofElements;
    }
    return null;
  };

  return (
    <div className="Store">
      {mapData(data)}
      {!data && <p>No Data</p>}
    </div>
  );
}

export default Store;
