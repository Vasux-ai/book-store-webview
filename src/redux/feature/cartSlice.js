import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
  cartItems: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const payload = action.payload;
      const itemId = payload.id || payload._id;
      if (!itemId) return; 

      const existingItem = state.cartItems.find((item) => item.id === itemId);

      if (existingItem) {
        existingItem.quantity += 1;
            Swal.fire({
            title: "Book already in cart",
            text: "",
            icon: "info",
            });
      } else {
        state.cartItems.push({
          ...payload,
          id: itemId,      
          quantity: 1,
        });
       Swal.fire({
                title: "Book added to cart",
                icon: "success",
                draggable: true
                });
      }
    },
    removeCart: (state, action) => {
        console.log("remove item from cart", action.payload);
        state.cartItems = state.cartItems.filter((item) => item.id !== action.payload._id);
    },
    clearCart: (state) => {
        state.cartItems = [];
    }
  },
});

export const { addToCart, removeCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;