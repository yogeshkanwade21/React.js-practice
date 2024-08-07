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
            const item = state.products.find(product => product.id === action.payload.id);
            if (item) {
                item.quantity = (item.quantity ?? 0) + 1;
                state.quantity += 1;
                state.total += item.price;
            } else {
                const { price, quantity = 1 } = action.payload;
                state.products.push(action.payload);
                state.quantity += quantity;
                state.total += price;   
            }
        },
        removeProduct: (state, action) => {
            const item = state.products.find(product => product.id === action.payload.id);
            if (item) {
                if(item.quantity === 1) {
                    state.products = state.products.filter(product => product.id !== action.payload.id);
                    state.quantity -= (item.quantity ?? 0);
                    state.total -= item.price;
                } else {
                    item.quantity = (item.quantity ?? 0) - 1;
                    state.quantity -= 1;
                    state.total -= item.price;
                }
            }
        },
        removeProductFromCart: (state, action) => {
            const item = state.products.find(product => product.id === action.payload.id);
            if (item) {
                state.products = state.products.filter(product => product.id !== action.payload.id);
                state.quantity -= (item.quantity ?? 0);
                state.total -= item.price * (item.quantity ?? 0);
            }
        }
    }
});

export const { addProduct, removeProduct, removeProductFromCart } = cartSlice.actions;
export default cartSlice.reducer;