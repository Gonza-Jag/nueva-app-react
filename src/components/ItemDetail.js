import React from 'react';

import { useCartContext } from '../context/CartContextProvider';
import ItemCount from './ItemCount';

export default function ItemDetail({ product }) {
  const { addToCart } = useCartContext();

  function handleOnAdd(count) {
    console.log(count);
    addToCart(product, count);
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#D0C9C0',
      }}
    >
      <h1>{product.name}</h1>
      <h4>Precio: ${product.price}</h4>
      <h4>Stock: {product.stock} unidades</h4>
      <img src={product.imgUrl} alt={product.name} height="250" width="250" />
      <ItemCount initial={1} stock={product.stock} onAdd={handleOnAdd} />
    </div>
  );
}
