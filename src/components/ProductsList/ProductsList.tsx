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
      <Row className="g-4" lg={4} align="center">
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
