import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getProduct } from '../utils/productos';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  useEffect(() => {
    getProduct(id)
      .then((result) => setProduct(result))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>{loading ? <h1>Cargando...</h1> : <ItemDetail product={product} />}</>
  );
};

export default ItemDetailContainer;
