import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Carrousel from '../../components/Carrousel';
import Context from '../../context/Context';
import { getProductDetails } from '../../services/APICommunication';
import handleError from '../../services/HandleError';
import LocalStorage from '../../services/LocalStorageHandler';
import { ProductDetailsStyle } from './styles';
/* eslint-disable react/jsx-max-depth */

export default function ProductDetails({ match }) {
  const { cartValue, setCartValue, setLogIn } = useContext(Context);
  const [comments, setComments] = useState([]);
  const [product, setProduct] = useState({});
  const [cardQuantity, setCardQuantity] = useState(0);
  const { id } = match.params;
  const history = useHistory();

  const buildStars = (ratings) => {
    const max = 5;
    const sum = ratings.reduce((total, valor) => total + valor, 0);

    const average = sum / ratings.length;
    const porcentagemMedia = (average / max) * 100;

    return porcentagemMedia;
  };

  const createComments = () => {
    const ten = 10;
    const min = 2.5;
    const lengthOfComments = Math.floor(Math.random() * ten) + 1; // Gera um comprimento aleatório entre 1 e 10
    const commentsArray = [];

    for (let i = 0; i < lengthOfComments; i += 1) {
      const rating = Math.floor(Math.random() * min) + min;
      commentsArray.push(rating);
    }

    return commentsArray;
  };

  useEffect(() => {
    getProductDetails(id).then((response) => {
      if (response.message) {
        handleError.defaultError(response, history, setLogIn);
        return;
      }
      setProduct(response.data);
    });
    const allComments = createComments();

    setComments(allComments);
  }, [id]);

  const writeNewQuantity = (oldCart, newQuantity) => {
    const values = oldCart.map((cartProduct) => {
      if (cartProduct.id === product.id) {
        return { ...cartProduct, quantity: newQuantity };
      }
      return cartProduct;
    });

    return values;
  }; // Escreve a nova quantidades dos produtos

  useEffect(() => {
    const oldCart = LocalStorage.get('shopping_cart') || [];

    const findProduct = oldCart.find(
      (cartProduct) => cartProduct.id === product.id,
    );

    if (findProduct) {
      setCardQuantity(findProduct.quantity);
    }
  }, [product.id, setCartValue, cartValue]);
  // Retorna os valores do localStorage e seta cardQuantity

  const addQuantity = () => {
    const newQuantity = cardQuantity + 1;
    setCardQuantity(newQuantity);

    const newCartValue = cartValue + product.price;
    setCartValue(newCartValue);

    const oldCart = LocalStorage.get('shopping_cart') || [];

    const findProduct = oldCart.find(
      (cartProduct) => cartProduct.id === product.id,
    );

    if (findProduct) {
      const values = writeNewQuantity(oldCart, newQuantity);
      LocalStorage.set('shopping_cart', values);
    }

    if (!findProduct) {
      const values = [...oldCart,
        { id: product.id,
          name: product.name,
          price: product.price,
          quantity: newQuantity,
        }];
      LocalStorage.set('shopping_cart', values);
    }
  };

  const removeQuantity = () => {
    if (cardQuantity === 0) return 0;

    const newQuantity = cardQuantity - 1;
    setCardQuantity(newQuantity);

    const newCartValue = cartValue - product.price;
    setCartValue(newCartValue);

    const oldCart = LocalStorage.get('shopping_cart') || [];

    const findProduct = oldCart.find(
      (cartProduct) => cartProduct.id === product.id,
    );

    if (findProduct) {
      const values = writeNewQuantity(oldCart, newQuantity);
      LocalStorage.set('shopping_cart', values);
    }

    if (!findProduct) {
      const values = [...oldCart,
        { id, name: product.name, price: product.price, quantity: newQuantity }];
      LocalStorage.set('shopping_cart', values);
    }
  };

  const totalByItem = () => {
    const total = product.price * cardQuantity;
    return total.toFixed(2);
  };

  return (

    <ProductDetailsStyle>
      <section className="return-products-section">
        <button
          className="return-btn large-text"
          type="button"
          onClick={ () => history.push('/products') }
        >
          <HiArrowNarrowLeft className="arrow-icon" />
          VOLTAR
        </button>

      </section>
      {product.name && (
        <section className="product-detail-section">
          <div className="img-container">
            <img className="product-img" alt="product-img" src={ product.urlImage } />
          </div>

          <div className="infos-container">

            <h1 className="product-name title-text">{ product.name }</h1>
            <span className="product-price large-text">{`R$ ${product.price}`}</span>
            <div className="product-price medium-text">

              <div className="comment-rating">
                <span className="comment-length">{`${comments.length} avaliações`}</span>

                <div className="comment-star-stars-outer large-text">
                  <div
                    className="comment-star-stars-inner large-text"
                    style={ { width: `${buildStars(comments)}%` } }
                  />
                </div>

              </div>

            </div>
            <div className="counter_container">
              <div className="counter">
                <button
                  className="button_counter decrease"
                  type="button"
                  name="decrease"
                  onClick={ removeQuantity }
                >
                  -
                </button>
                <span className="quantity large-text">{cardQuantity}</span>
                <button
                  className="button_counter increase"
                  type="button"
                  name="increase"
                  onClick={ addQuantity }
                >
                  +
                </button>
              </div>
              <button
                className="cart-btn medium-text"
                type="button"
                onClick={ () => history.push('/checkout') }
              >
                <span>{`Adicionar (${cardQuantity})`}</span>
                <span>{`R$ ${totalByItem()}`}</span>

              </button>

            </div>
          </div>

        </section>
      )}

      <div className="carrousel-category-container">
        <h2 className="carrousel-title large-text">
          Você também pode gostar
        </h2>
        {product.category && (
          <Carrousel category={ product.category } />
        )}

      </div>

    </ProductDetailsStyle>
  );
}

ProductDetails.propTypes = ({
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
});
