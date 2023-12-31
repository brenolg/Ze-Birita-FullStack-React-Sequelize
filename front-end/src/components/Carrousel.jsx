import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import '../Global.css';
import sale from '../images/bfsale.png';
import { getProducts, getProductsByCategory } from '../services/APICommunication';
import handleError from '../services/HandleError';
import './Carrousel.css';

export default function Carrousel({ category }) {
  const [productList, setProductList] = useState([]);
  const firstCarrossel = useRef(null);
  const secondCarrossel = useRef(null);
  const history = useHistory();
  const blackFridayPath = useRouteMatch(['/products', '/search']);

  useEffect(() => {
    if (category === 'all') {
      const arraySlice = 12;
      getProducts().then((response) => {
        if (response.message) {
          handleError.defaultError(response);
          return;
        }
        setProductList(response.data.slice(0, arraySlice));
      });
    }

    if (category !== 'all' && category !== undefined) {
      getProductsByCategory(category).then((response) => {
        if (response.message) {
          handleError.defaultError(response);
          return;
        }
        setProductList(response.data);
      });
    }
  }, [setProductList, blackFridayPath.isExact, category]);

  const buildHeight = () => {
    if (blackFridayPath.isExact) {
      return '17rem';
    } return '15rem';
  };

  const buildNameHeight = () => {
    if (blackFridayPath.isExact) {
      return '1rem';
    } return '3.8rem';
  };

  const percent = 1.25;
  const fakeValue = (value) => value * percent;

  const discount = (valorOriginal, valorComDesconto) => {
    const desconto = ((valorOriginal - valorComDesconto) / valorOriginal) * 100;
    return desconto;
  };

  const renderCarouselItem = (product, isExact) => (
    <button
      onClick={ () => history.push(`/products/${product.id}`) }
      className="carousel-item"
      type="button"
      key={ product.id }
    >
      <div className="carrousel-img-div">
        {isExact && (
          <span className="carrousel-discount medium-text">
            {`${discount(product.price, fakeValue(product.price)).toFixed()}%`}
          </span>
        )}

        <img
          className="carrousel-img"
          src={ product.urlImage }
          alt="Produto img"
          style={ { height: `${buildHeight()}` } }
        />
      </div>

      <span
        className="carrousel-name small-text"
        style={ { height: `${buildNameHeight()}` } }
      >
        {product.name}

      </span>

      <div className="carrousel-values">
        {isExact && (
          <span className="fake-price carrousel-price">
            {`R$ ${fakeValue(product.price).toFixed(2)}`}
          </span>
        )}

        <span className="carrousel-price medium-text">
          {`R$ ${product.price.toFixed(2)}`}
        </span>
      </div>
    </button>
  );

  useEffect(() => {
    const carouselAnimation = firstCarrossel.current.animate(
      [
        { transform: 'translateX(0)' },
        { transform: 'translateX(calc(100%)' },
      ],
      {
        duration: 80000,
        iterations: Infinity,
        easing: 'linear',
      },
    );

    return () => {
      carouselAnimation.cancel();
    };
  }, []);

  useEffect(() => {
    const carouselAnimation = secondCarrossel.current.animate(
      [
        { transform: 'translateX(-100%)' },
        { transform: 'translateX(calc(0%)' },
      ],
      {
        duration: 80000,
        iterations: Infinity,
        easing: 'linear',
      },
    );

    return () => {
      carouselAnimation.cancel();
    };
  }, []);

  return (
    <>
      {blackFridayPath.isExact && (
        <img src={ sale } alt="sale" className="black-friday" />
      )}

      <section className="carousel">

        <div ref={ firstCarrossel } className="carousel-inner">
          {category && productList
            .map((product) => renderCarouselItem(product, blackFridayPath.isExact))}
        </div>

        <div ref={ secondCarrossel } className="carousel-inner">

          {category && productList
            .map((product) => renderCarouselItem(product, blackFridayPath.isExact))}
        </div>
      </section>
    </>
  );
}
Carrousel.propTypes = ({
  category: PropTypes.string.isRequired,
});
