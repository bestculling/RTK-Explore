import { configureStore } from "@reduxjs/toolkit";
import cartSlice, { CartSlice } from "./features/cartSlice";
import { PersonSlice } from "./features/personSlice";

export const store = configureStore({
    // Add Slice Reducers to the Store
    reducer: {
        person: PersonSlice.reducer,
        cart: CartSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch