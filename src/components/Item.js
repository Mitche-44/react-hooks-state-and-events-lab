import React from "react";

function Item({ name, category }) {

const [isInCart, setIsInCart] = React.useState(false);

const className = isInCart ? "in-cart" : "";
const handleAddToCartClick = () => {
  setIsInCart(!isInCart);
}

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddToCartClick}>{isInCart ? "Remove from Cart" : "Add to Cart "}</button>
    </li>
  );
}

export default Item;
