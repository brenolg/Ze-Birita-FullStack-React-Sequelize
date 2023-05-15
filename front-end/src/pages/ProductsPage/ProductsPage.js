// import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import ProductsDiv from './styles';

export default function ProductsPage() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('products'));
    setProductList(products);
  }, []);

  return (
    <ProductsDiv>
      {productList.length && productList.map((product) => (
        <ProductCard
          key={ product.id }
          id={ product.id }
          name={ product.name }
          url={ product.url_image }
          price={ product.type }
        />
      ))}
    </ProductsDiv>
  );
}
