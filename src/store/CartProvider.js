import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartState = JSON.parse(localStorage.getItem("carts")) ?? [];

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedItems = [];
    // console.log(state);
    // console.log(action);
    // console.log(action.item);
    // action.payload;
    let newCartItem, newState;
    const checkItemInCart = state.find((item) => item.id === action.product.id);

    if (checkItemInCart) {
      newCartItem = {
        ...checkItemInCart,
        quantity: checkItemInCart.quantity + 1,
      };

      newState = state.map((item) => {
        if (item.id === action.product.id) {
          return newCartItem;
        } else {
          return item;
        }
      });
    } else {
      newCartItem = { ...action.product, quantity: 1 };
      newState = [...state, newCartItem];
    }
    localStorage.setItem("carts", JSON.stringify(newState));
    console.log(newState);
    return newState;
  }
  if (action.type === "REMOVE_CART_ITEM") {
    console.log(action);

    const newState = state.filter((item) => item.id !== action.id);

    // }
    localStorage.setItem("carts", JSON.stringify(newState));

    return newState;
  }
  if (action.type === "UPDATE_QUANTITY") {
    console.log(action.payload);
    const newState = state.map((item) => {
      if (item.id === action.payload.product.id) {
        return {
          ...item,
          quantity: action.payload.quantity,
        };
      } else {
        return item;
      }
    });
    localStorage.setItem("carts", JSON.stringify(newState));
    return newState;
  }

  return state;
};

const CartProvider = (props) => {
  const [carts, dispatchCartAction] = useReducer(cartReducer, cartState);

  const addItemToCartHandler = (product) => {
    dispatchCartAction({ type: "ADD", product });
  };
  const updateQuantityCartItem = (payload) => {
    dispatchCartAction({
      type: "UPDATE_QUANTITY",
      payload: { product: payload.product, quantity: payload.quantity },
    });
  };
  const removeCartItem = (id) => {
    dispatchCartAction({ type: "REMOVE_CART_ITEM", id: id });
    //                          action
  };

  const value = {
    carts: carts,
    // totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeCartItem: removeCartItem,
    updateQuantityCartItem: updateQuantityCartItem,
  };

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
};

export default CartProvider;

// useContext, useReducer, contextAPI
