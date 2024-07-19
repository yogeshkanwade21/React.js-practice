import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    quantity: 0,
    total: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {

            const { price, quantity = 1 } = action.payload;
            state.quantity += quantity;
            state.products.push(action.payload);
            state.total += price * quantity;
        }
    }
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;