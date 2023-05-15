// import PropTypes from 'prop-types';

import { useEffect, useContext } from 'react';
import Context from '../../context/Context';
import ProductCard from './ProductCard';
import ProductsDiv from './styles';
import Header from '../../components/Header';
import { getProducts } from '../../utils/APICommunication';

export default function ProductsPage() {
  const { setProductList, productList } = useContext(Context);

  useEffect(() => {
    getProducts().then((response) => setProductList(response));
  }, [setProductList]);

  return (
    <>
      <Header />
      <ProductsDiv>
        {productList.length && productList.map((product) => (
          <ProductCard
            key={ product.id }
            id={ product.id }
            name={ product.name }
            url={ product.urlImage }
            price={ product.price }
          />
        ))}
      </ProductsDiv>
    </>
  );
}
