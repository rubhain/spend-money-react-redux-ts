import React from "react";
import { useSelector } from "react-redux";

function Header() {
  const budget = useSelector((state: any) => state.products.budget);
  return (
    <div>
      <h1>${budget.toLocaleString()}</h1>
    </div>
  );
}

export default Header;
