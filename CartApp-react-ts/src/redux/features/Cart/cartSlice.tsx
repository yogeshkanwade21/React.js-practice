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
        },
        incrementQuantity: (state, action) => {
            const item = state.products.find(product => product.id === action.payload.id);
            if (item) {
                item.quantity += 1;
                state.quantity += 1;
                state.total += item.price;
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.products.find(product => product.id === action.payload.id);
            if (item) {
                item.quantity -= 1;
                state.quantity -= 1;
                state.total -= item.price;
            }
        },
        removeProduct: (state, action) => {
            const item = state.products.find(product => product.id === action.payload.id);
            if (item) {
                state.products = state.products.filter(product => product.id !== action.payload.id);
                state.quantity -= item.quantity;
                state.total -= item.price * item.quantity;
            }
        }
    }
});

export const { addProduct, incrementQuantity, decrementQuantity, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;