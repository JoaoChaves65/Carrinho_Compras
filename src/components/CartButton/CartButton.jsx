import React from 'react';
import { GrCart } from 'react-icons/gr';

import './CartButton.css';

function CartButton() {
  return (
    <button type="button" className="cart_button">
      <GrCart />
      <span className="cart_status">1</span>
    </button>
  );
}

export default CartButton;
