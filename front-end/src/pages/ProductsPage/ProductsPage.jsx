import { useCallback, useContext, useEffect, useState } from 'react';
import { MdShoppingCartCheckout } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import 'react-toastify/dist/ReactToastify.css';
import Carrousel from '../../components/Carrousel';
import Context from '../../context/Context';
import { getProducts, searchProducts } from '../../services/APICommunication';
import handleError from '../../services/HandleError';
import { noCartProducts } from '../../services/notifications/notifications';
import ProductCard from './ProductCard';
import ProductsStyle from './styles';

export default function ProductsPage() {
  const history = useHistory();
  const { cartValue, productList, setProductList } = useContext(Context);
  const [priceArray] = useState([]);
  const location = useLocation();

  const fetchProducts = useCallback(() => {
    if (location.search) {
      const searchParams = new URLSearchParams(location.search);
      const category = searchParams.get('category');
      const name = searchParams.get('name');

      searchProducts(category, name).then((response) => {
        if (response.message) {
          handleError.defaultError(response);
          history.push('/products');
          return;
        }

        setProductList(response.data);
      });
      return;
    }
    getProducts().then((response) => {
      if (response.message) {
        handleError.defaultError(response);
        return;
      }
      setProductList(response.data);
    });
  }, [setProductList, location.search, history]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleCheckoutBtn = () => {
    if (cartValue === 0) {
      noCartProducts();
      return;
    }
    history.push('/checkout');
  };

  return (
    <ProductsStyle>

      <div>
        <main className="container_products">
          <Carrousel category="all" />

          {productList.length && productList.map((product) => (
            <ProductCard
              key={ product.id }
              id={ product.id }
              name={ product.name }
              url={ product.urlImage }
              price={ product.price }
              priceArray={ priceArray }
            />
          ))}
        </main>

        <button
          className="cart-value-container animate-shadow"
          type="button"
          name="checkout"
          onClick={ handleCheckoutBtn }
        >

          <MdShoppingCartCheckout className="cart-icon" />
          <span className="cart-value title-text">
            {`Ver Carrinho R$ ${Math.abs(cartValue).toFixed(2)} `}
          </span>

        </button>
      </div>
    </ProductsStyle>
  );
}
