import {formatCurrency} from '../utilities/formatCurrency';
import CartItem from '../components/CartItem';

import { useAppSelector } from "../redux/hooks/hooks";

export const Cart = () => {
  
    const cart = useAppSelector((state) => state.cart);
    console.log(cart);

    if(cart.quantity === 0){
        return <h1>Cart is empty</h1>
    }

    return (
      <>
      <h2>Items in Cart <i>({cart.quantity})</i></h2>

      {cart.products.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}

      <h3 className="text-end"> Total: {formatCurrency(cart.total)}</h3>
      </>
    )
}