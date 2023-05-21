import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../../context/Context';
import { getProducts } from '../../services/APICommunication';
import ProductCard from './ProductCard';
import ProductsStyle from './styles';

export default function ProductsPage() {
  const history = useHistory();
  const { setProductList, productList, cartValue } = useContext(Context);

  useEffect(() => {
    getProducts().then((response) => {
      setProductList(response);
    });
  }, [setProductList]);

  const handleCheckoutBtn = () => {
    history.push('/checkout');
  };

  return (
    <ProductsStyle>
      <div>
        <main className="container_products">

          <button
            className="cart-value-container"
            type="button"
            name="checkout"
            onClick={ handleCheckoutBtn }
          >
            {`Ver Carrinho: R$ ${Math.abs(cartValue).toFixed(2)}`}
          </button>

          {productList.length && productList.map((product) => (
            <ProductCard
              key={ product.id }
              id={ product.id }
              name={ product.name }
              url={ product.urlImage }
              price={ product.price }
            />
          ))}
        </main>
      </div>
    </ProductsStyle>
  );
}
