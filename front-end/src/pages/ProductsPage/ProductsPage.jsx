import { useContext, useEffect } from 'react';
import Header from '../../components/Header';
import Context from '../../context/Context';
import { getProducts } from '../../services/APICommunication';
import ProductCard from './ProductCard';
import ProductsStyle from './styles';

export default function ProductsPage() {
  const { setProductList, productList } = useContext(Context);

  useEffect(() => {
    getProducts().then((response) => {
      setProductList(response);
    });
  }, [setProductList]);

  return (
    <>
      <Header />
      <ProductsStyle>
        <main className="container_products">
          {productList.length && productList.map((product) => (
            <ProductCard
              key={ product.id }
              id={ product.id }
              name={ product.name }
              url={ product.urlImage }
              price={ product.price }
              quantity={ product.quantity || 0 }
            />
          ))}
        </main>
      </ProductsStyle>
    </>
  );
}
