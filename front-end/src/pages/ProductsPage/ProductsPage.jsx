import { useContext, useEffect } from 'react';
import Header from '../../components/Header';
import Context from '../../context/Context';
import { getProducts } from '../../services/APICommunication';
import ProductCard from './ProductCard';
import ProductsStyle from './styles';

export default function ProductsPage() {
  const { setProductList, productList, cartValue } = useContext(Context);

  useEffect(() => {
    getProducts().then((response) => {
      setProductList(response);
    });
  }, [setProductList]);

  return (
    <>
      <Header />

      <ProductsStyle>
        <div>
          <main className="container_products">

            <button type="button" className="cart-value-container">
              {`Ver Carrinho: R$ ${cartValue.toFixed(2)}`}
            </button>

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
        </div>
      </ProductsStyle>
    </>
  );
}
