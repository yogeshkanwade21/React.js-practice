import Card from 'react-bootstrap/Card';
import { formatCurrency } from '../utilities/formatCurrency';

type StoreItemProps = {
    id: number
    ItemName: string
    price: number
    imgUrl: string
}

export const StoreItem = ({ id, ItemName, price, imgUrl }: StoreItemProps) => {
    const quantity = 1;
    return (
        <Card className="h-100">
        <Card.Img
            variant="top"
            src={imgUrl}
            height="200px"
            style={{ objectFit: "cover" }}
        />
        <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span className="fs-2">{ItemName}</span>
            <span className="ms-2 text-muted">{formatCurrency(price)}</span>
            </Card.Title>
            <div className="mt-auto">
                {quantity === 0 ? (
                    <button className="btn btn-primary">Add to cart</button>
                ) : (
                    <div
                    className="d-flex align-items-center flex-column"
                    style={{ gap: ".5rem" }}
                    >
                    <div
                        className="d-flex align-items-center justify-content-center"
                        style={{ gap: ".5rem" }}
                    >
                        <button className="btn btn-primary">-</button>
                        <div>
                        <span className="fs-3">{quantity}</span> in cart
                        </div>
                        <button className="btn btn-primary">+</button>
                    </div>
                    <button className="btn btn-danger">Remove</button>
                    </div>
                )}
            
            </div>
        </Card.Body>
        </Card>
    )
}