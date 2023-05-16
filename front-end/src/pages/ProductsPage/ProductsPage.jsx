// import PropTypes from 'prop-types';

import { useContext, useEffect } from 'react';
import Header from '../../components/Header';
import Context from '../../context/Context';
import { getProducts } from '../../services/APICommunication';
import ProductCard from './ProductCard';
import ProductsStyle from './styles';

export default function ProductsPage() {
  const { setProductList, productList } = useContext(Context);
  const { shoppingCart, setshoppingCart } = useContext(Context);

  useEffect(() => {
    getProducts().then((response) => {
      setProductList(response);
    });
  }, [setProductList]);

  // const handleQuantity = (id) => {
  //   const localShoppingCart = getShoppingCart('shopping_cart');
  //   if (localShoppingCart) {
  //     const findProduct = localShoppingCart.find(
  //       (cartProduct) => cartProduct.id === id,
  //     );
  //     return findProduct.quantity;
  //   }
  //   return 0;
  // };

  const onAdd = (product) => {
    console.log('add', product);
  //   const localShoppingCart = getShoppingCart('shopping_cart') || [];
  //   console.log('cart', shoppingCart);
  //   const findProduct = localShoppingCart.find(
  //     (cartProduct) => cartProduct.id === product.id,
  //   );
  //   if (!findProduct) {
  //     product.quantity = 1;
  //     addProduct(product);
  //     console.log('cart UP 1', shoppingCart);
  //   } else {
  //     findProduct.quantity += 1;
  //     saveShoppingCart(shoppingCart);
  //     console.log('cart UP +1', shoppingCart);
  //   }
  //   setshoppingCart(getShoppingCart('shopping_cart'));
  };

  // onRemove = (product) => {
  //   this.shoppingCart = getShoppingCart();
  //   const findProduct = this.shoppingCart.find((cartProduct) => cartProduct.id === product.id);
  //   if (findProduct) {
  //     findProduct.quantity -= 1;
  //     saveShoppingCart(this.shoppingCart);
  //   }
  //   if (findProduct?.quantity === 0) {
  //     removeProduct(product);
  //   }
  //   this.shoppingCart = getShoppingCart();
  // };

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
              // quantity={ handleQuantity(product.id) }
              quantity={ product.quantity || 0 }
              onAdd={ () => onAdd(product) }
              onRemove={ () => console.log('remove') }
            />
          ))}
        </main>
      </ProductsStyle>
    </>
  );
}
