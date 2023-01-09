import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { budgetCounter } from "../../../storage/products/productsSlice";

function ProductCard(props: any) {
  const [count, setCount] = useState(0);

  const product = props.item;
  const budget = useSelector((state: any) => state.products.budget);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(budgetCounter({ id: product.id, count: count }));
  }, [count]);

  const buyItem = () => {
    setCount(Number(count) + 1);
  };

  const sellItem = () => {
    setCount(Number(count) - 1);
  };

  return (
    <div>
      {" "}
      <Card border="secondary" style={{ width: "18rem", height: "30rem" }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.productName}</Card.Title>
          <Card.Text>${product.productPrice}</Card.Text>
          <Button variant="secondary" onClick={sellItem}>
            Sell
          </Button>
          <input type="number" value={count}></input>
          <Button variant="primary" onClick={buyItem}>
            Buy
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;
