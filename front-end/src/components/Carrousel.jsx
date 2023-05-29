import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    getProducts().then((response) => {
      setProductList(response);
    });
  }, [setProductList]);
  return (
    <>

      <img src={ sale } alt="sale" className="black-friday" />
      <section className="carousel">

        <div className="carousel-inner">

          {productList.length && productList.map((product) => (
            <div key={ product.id } className="carousel-item">

              <div className="carrousel-img-div">
                <span className="carrousel-discount medium-text">
                  { `${discount(product.price, fakeValue(product.price)).toFixed()}%` }
                </span>
                <img className="carrousel-img" src={ product.urlImage } alt="Produto 1" />
              </div>

              <span className="carrousel-name small-text">{ product.name }</span>

              <div className="carrousel-values">
                <span className="carrousel-price medium-text">
                  { `R$ ${product.price.toFixed(1)}` }
                </span>
                <span className="fake-price carrousel-price medium-text">
                  {`R$ ${fakeValue(product.price).toFixed(1)}` }
                </span>

              </div>
            </div>

          ))}
        </div>
      </section>
    </>

  );
}
