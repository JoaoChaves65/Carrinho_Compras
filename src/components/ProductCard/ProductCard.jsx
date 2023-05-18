import React from 'react';

function ProductCard() {
  return (
    <section className="product-card">

      <img src="https://http2.mlstatic.com/D_910401-MLA46545868460_062021-W.jpg" alt="product" className="card_image" />

      <div className="card_infos">
        <h2 className="card_price">R$ 200.20</h2>
        <h2 className="card_title">Iphone</h2>
      </div>

      <button type="button" className="card_add-cart">+</button>
    </section>
  );
}

export default ProductCard;
