import React from 'react';
import { GrCart } from 'react-icons/gr';

import './ProductCard.css';

function ProductCard() {
  return (
    <section className="product-card">

      <img src="https://http2.mlstatic.com/D_910401-MLA46545868460_062021-W.jpg" alt="product" className="card_image" />

      <div className="card_infos">
        <h2 className="card_price">R$ 200.20</h2>
        <h2 className="card_title">Iphone</h2>
      </div>

      <button type="button" className="button_add-cart">
        <GrCart />
      </button>
    </section>
  );
}

export default ProductCard;
