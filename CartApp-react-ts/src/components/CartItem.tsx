import { Col, Row } from 'react-bootstrap';
import { formatCurrency } from '../utilities/formatCurrency';
import Card from 'react-bootstrap/Card';

type CartItemProps = {
  product: {
    id: number;
    ItemName: string;
    price: number;
    imgUrl: string;
    quantity?: number;
  };
}

const CartItem = ( {product} : CartItemProps ) => {
  return (
    <Card className="mb-3 mt-3">
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
              <span className="fs-4 fw-bold">
                {formatCurrency(product.price * (product.quantity ?? 0))}
              </span>
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default CartItem;