import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard/ProductCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function ProductsList() {
  const items = useSelector((state: any) => state.products.items);

  return (
    <div>
      {" "}
      <Row xs={1} md={2} className="g-4">
        {items.map((item: any) => (
          <Col>
            <ProductCard item={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ProductsList;
