import React from 'react';
import { GrCart } from 'react-icons/gr';
import propTypes from 'prop-types';

import './ProductCard.css';
import formatCurrency from '../../utils/formatCurrency';

function ProductCard({ data }) {
  const { title, price, thumbnail } = data;

  return (
    <section className="product-card">

      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="product"
        className="card_image"
      />

      <div className="card_infos">
        <h2 className="card_price">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="card_title">{title}</h2>
      </div>

      <button type="button" className="button_add-cart">
        <GrCart />
      </button>
    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isrequired;
