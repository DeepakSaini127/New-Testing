import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cardItem, setCardItem] = useState({});
  const addToCard = (itemID) => {
    if (!cardItem[itemID]) {
      setCardItem((prev) => ({ ...prev, [itemID]: 1 }));
    } else {
      setCardItem((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
    }
  };

  const removeFromCard = (itemID) => {
    setCardItem((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
  };

  const getTotalCardAmount = () => {
    let totalAmount = 0;
    for (const item in cardItem) {
      if (cardItem[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cardItem[item];
      }
    }
    return totalAmount;
  };

  const contextValue = {
    food_list,
    cardItem,
    setCardItem,
    addToCard,
    removeFromCard,
    getTotalCardAmount
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
