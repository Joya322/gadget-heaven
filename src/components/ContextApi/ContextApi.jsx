import { createContext } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

export const UserContext = createContext();

const ContextApi = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [wishList, setWishList] = useState([]);

  const handleCartList = (product) => {
    if (!cartList.includes(product)) {
      setCartList([...cartList, product]);
      toast.success("Added to Cart");
    } else {
      toast.warn("You already added!");
    }
  };

  const handleWishList = (product) => {
    if (!wishList.includes(product)) {
      setWishList([...wishList, product]);
      toast.success("Added to Wish");
    } else {
      toast.warn("You already added!");
    }
  };

    return (
        <UserContext.Provider value={{cartList, wishList, handleCartList, handleWishList}}>
            {children}
        </UserContext.Provider>
  );
};

export default ContextApi;
