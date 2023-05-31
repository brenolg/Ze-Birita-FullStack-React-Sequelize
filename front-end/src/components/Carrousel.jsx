import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useRouteMatch } from 'react-router-dom';
import { getProducts } from '../services/APICommunication';
import sale from '../images/bfsale.png';
import './Carrousel.css';
import '../Global.css';

const percent = 1.25;
const fakeValue = (value) => value * percent;

const discount = (valorOriginal, valorComDesconto) => {
  const desconto = ((valorOriginal - valorComDesconto) / valorOriginal) * 100;
  return desconto;
};

export default function Carrousel() {
  const [productList, setProductList] = useState([]);
  // productList é setado com todos produtos o q limita o carrousel é o css com transform 100vh
  const history = useHistory();
  const productsPath = useRouteMatch('/products');

  useEffect(() => {
    getProducts().then((response) => {
      setProductList(response);
    });
  }, [setProductList]);
  return (
    <>
      {productsPath.isExact && (
        <img src={ sale } alt="sale" className="black-friday" />
      )}

      <section className="carousel">

        <div className="carousel-inner">

          {productList.length && productList.map((product) => (
            <button
              onClick={ () => history.push(`/products/${product.id}`) }
              className="carousel-item"
              type="button"
              key={ product.id }
            >

              <div className="carrousel-img-div">
                {productsPath.isExact && (
                  <span className="carrousel-discount medium-text">
                    { `${discount(product.price, fakeValue(product.price)).toFixed()}%` }
                  </span>
                )}

                <img
                  className="carrousel-img"
                  src={ product.urlImage }
                  alt="Produto img"
                />
              </div>

              <span className="carrousel-name small-text">{ product.name }</span>

              <div className="carrousel-values">
                {productsPath.isExact && (
                  <span className="fake-price carrousel-price">
                    {`R$ ${fakeValue(product.price).toFixed(2)}`}
                  </span>
                )}

                <span className="carrousel-price medium-text">
                  {`R$ ${product.price.toFixed(2)}`}
                </span>
              </div>
            </button>

          ))}
        </div>
      </section>
    </>

  );
}
