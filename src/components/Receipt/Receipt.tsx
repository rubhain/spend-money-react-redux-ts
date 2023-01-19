import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

function Receipt() {
  const items = useSelector((state: any) => state.products.items);

  const filteredItems = items.filter((item: any) => item.count > 0);

  let moneySpent = 0;

  filteredItems.map((item: any) => {
    moneySpent += item.productPrice * item.count;
  });

  if (filteredItems.length === 0) {
    return null;
  }

  return (
    <div>
      <h3>Your Receipt</h3>
      {filteredItems.map((item: any) => (
        <Row>
          <div key={item.id}>
            <div>
              <span>{item.productName}</span>
              <span>x{item.count}</span>{" "}
              <span>${item.productPrice * item.count}</span>
            </div>
          </div>
        </Row>
      ))}
      <div>
        {" "}
        <h6>Total</h6> ${moneySpent}
      </div>
    </div>
  );
}

export default Receipt;
