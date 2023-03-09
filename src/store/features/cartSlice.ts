import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface Product {
    id: number
    name: string
    price: number
}

export interface CartItem {
    product: Product;
    qty: number;
}

interface CartState {
    items: CartItem[];
}
const initialState: CartState = {
    items: [],
};

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            state.items.push(action.payload);
        },
    },
});

export default CartSlice.reducer;
export const { addToCart } = CartSlice.actions;

const items = (state: RootState) => state.cart.items;