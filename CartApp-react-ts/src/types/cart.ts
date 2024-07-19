import { Product } from "./product";

export interface CartState {
    products: Product[];
    quantity: number;
    total: number;
}