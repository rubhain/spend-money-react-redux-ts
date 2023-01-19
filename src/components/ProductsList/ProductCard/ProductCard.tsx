import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { budgetCounter } from "../../../storage/products/productsSlice";

function ProductCard(props: any) {
  const [count, setCount] = useState(0);
  const [sellBtn, setSellBtn] = useState(true);
  const [buyBtn, setBuyBtn] = useState<boolean>();

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

  useEffect(() => {
    if (count > 0) {
      setSellBtn(false);
    } else {
      setSellBtn(true);
    }
  }, [count]);

  useEffect(() => {
    if (product.productPrice > budget) {
      setBuyBtn(true);
    } else {
      setBuyBtn(false);
    }
  }, [budget]);

  const handleChange = (value: number) => {
    const maxCount = Math.floor(budget / product.productPrice) + count;
    if (value && value > 0) {
      if (value > maxCount && budget >= 0) {
        setCount(maxCount);
      } else {
        setCount(value);
      }
    } else {
      setCount(0);
    }
  };

  return (
    <div>
      {" "}
      <Card border="secondary" style={{ width: "30rem", height: "30rem" }}>
        <Card.Img
          variant="top"
          src={product.image}
          style={{ height: "15rem" }}
        />
        <Card.Body>
          <Card.Title>{product.productName}</Card.Title>
          <Card.Text>${product.productPrice}</Card.Text>
          <Button variant="secondary" onClick={sellItem} disabled={sellBtn}>
            Sell
          </Button>
          <input
            type="number"
            value={count}
            onChange={(e: any) => {
              handleChange(parseInt(e.target.value));
            }}
          ></input>
          <Button variant="primary" onClick={buyItem} disabled={buyBtn}>
            Buy
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;
