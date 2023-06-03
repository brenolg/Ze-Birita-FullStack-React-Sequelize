import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useRouteMatch } from 'react-router-dom';
import { getProducts } from '../services/APICommunication';
import sale from '../images/bfsale.png';
import './Carrousel.css';
import '../Global.css';

export default function Carrousel() {
  const [productList, setProductList] = useState([]);
  // productList é setado com todos produtos o q limita o carrousel é o css com transform 100vh
  const carrosselRef = useRef(null);
  const carrosselRef2 = useRef(null);
  const history = useHistory();
  const productsPath = useRouteMatch('/products');

  useEffect(() => {
    const arraySlice = 18;
    getProducts().then((response) => {
      setProductList(response.slice(0, arraySlice));
    });
  }, [setProductList]);

  const buildHeight = () => {
    if (productsPath.isExact) {
      return '22rem';
    } return '16rem';
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

      <span className="carrousel-name small-text">{product.name}</span>

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
    const carouselAnimation = carrosselRef.current.animate(
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
    const carouselAnimation = carrosselRef2.current.animate(
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
      {productsPath.isExact && (
        <img src={ sale } alt="sale" className="black-friday" />
      )}

      <section className="carousel">

        <div ref={ carrosselRef } className="carousel-inner">
          {productList
            .map((product) => renderCarouselItem(product, productsPath.isExact))}
        </div>

        <div ref={ carrosselRef2 } className="carousel-inner-2">

          {productList
            .map((product) => renderCarouselItem(product, productsPath.isExact))}
        </div>
      </section>
    </>

  );
}
