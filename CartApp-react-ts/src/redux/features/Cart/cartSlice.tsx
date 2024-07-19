import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../../types/product';
import { CartState } from '../../../types/cart';

const initialState : CartState = {
    products: [] as Product[],
    quantity: 0,
    total: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {

            const { price, quantity = 1 } = action.payload;
            state.products.push(action.payload);
            state.quantity += quantity;
            state.total += price * quantity;
        }
    }
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;