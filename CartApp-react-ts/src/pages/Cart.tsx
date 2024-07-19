import {Card, Col, Row} from 'react-bootstrap';
import {formatCurrency} from '../utilities/formatCurrency';

import { useAppSelector } from "../redux/hooks/hooks";

export const Cart = () => {
  
    const cart = useAppSelector((state) => state.cart);
    const products = cart.products;
    console.log(cart);
    // console.log(products);

    if(cart.quantity === 0){
        return <h1>Cart is empty</h1>
    }


    return (
      <>
      <h2>Items in Cart <i>({cart.quantity})</i></h2>

      {products.map((product) => (
        <Card className="mb-3 mt-3" key={product.id}>
            <Card.Body>
                <Row>
                    <Col xs={4} md={3}>
                        <Card.Img
                        variant="left"
                        src={product.imgUrl}
                        alt={product.ItemName}
                        style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                        />
                    </Col>

                    <Col xs={8} md={9}>
                        <Card.Title>{product.ItemName}</Card.Title>
                        <Card.Text className="text-muted">
                        {product.quantity} x {formatCurrency(product.price)}
                        </Card.Text>
                        <Card.Text className="mt-5">
                        <span className="fs-4 fw-bold">{formatCurrency(product.price * product.quantity ?? 0)}</span>
                        </Card.Text>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
      ))}

      <h3 className="text-end"> Total: {formatCurrency(cart.total)}</h3>

      </>
    )
}