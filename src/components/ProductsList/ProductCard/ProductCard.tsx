import React from "react";
import { Button, Card } from "react-bootstrap";

function ProductCard(props: any) {
  const product = props.item;

  return (
    <div>
      {" "}
      <Card border="secondary" style={{ width: "18rem", height: "30rem" }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.productName}</Card.Title>
          <Card.Text>${product.productPrice}</Card.Text>
          <Button variant="secondary">Sell</Button>
          <Button variant="primary">Buy</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;
