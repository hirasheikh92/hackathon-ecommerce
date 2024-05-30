import { Productprops } from "@/types/products";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { urlForImage } from "../../../sanity/lib/image";
import BASE_PATH_FORAPI from "@/lib/basePathUrl";

export interface CartState {
  items: Array<Productprops>;
  totalAmount: number;
  totalQuantity: number;
  isLoading: boolean;
  error: any;
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
  isLoading: false,
  error: null,
};

export const fetchData = createAsyncThunk(
  "cart/fetchdata",
  async (userId: string) => {
    const res = await fetch(`${BASE_PATH_FORAPI}/api/cart/${userId}`);

    if (!res.ok) {
      console.log("Failed to fetch data");
    }

    const data = await res.json();

    return data;
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(
      state: CartState,
      action: PayloadAction<{ product: Productprops; quantity: number }>
    ) {
      const newItem = action.payload.product;
      const existingItem = state.items.find((item) => item._id === newItem._id);

      state.totalQuantity = state.totalQuantity + action.payload.quantity;
      state.totalAmount =
        state.totalAmount +
        action.payload.quantity * action.payload.product.price;

      if (!existingItem) {
        const totalPrice = newItem.price * action.payload.quantity;
        state.items.push({
          ...newItem,
          //@ts-ignore
          image: urlForImage(newItem.image).url(),
          quantity: action.payload.quantity,
          totalPrice,
        });
      } else {
        const totalPrice =
          existingItem.totalPrice +
          existingItem.price * action.payload.quantity;
        existingItem.quantity += action.payload.quantity;
        existingItem.totalPrice = totalPrice;
      }
    },

    removeProduct(state: CartState, action: PayloadAction<string>) {
      const productId = action.payload;
      state.items = state.items.filter((item) => item._id !== productId);
      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalAmount = state.items.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
    },

    removeFromCart(state: CartState, action: PayloadAction<string>) {
      const productId = action.payload;
      const existingItem = state.items.find((item) => item._id === productId);

      state.totalQuantity--;

      state.totalAmount = state.totalAmount - existingItem?.price!;

      if (existingItem?.quantity === 1) {
        state.items = state.items.filter((item) => item._id !== productId);
      } else {
        existingItem!.quantity--;
        existingItem!.totalPrice =
          existingItem!.totalPrice - existingItem?.price!;
      }
    },
    clearCart(state) {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    // handle async actions with builder methods
    builder.addCase(fetchData.pending, (state) => {
      // set loading state to true
      state.isLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      const { cartItems, totalQuantity, totalAmount } = action.payload;
      state.items = cartItems;
      state.totalAmount = totalAmount;
      state.totalQuantity = totalQuantity;
      state.isLoading = false;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      // set loading state to false and error state to true
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

// export const selectIsLoading = (state: RootState) => state.cart.isLoading;

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
