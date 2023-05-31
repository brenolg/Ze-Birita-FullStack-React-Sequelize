import styled from 'styled-components';

export const ProductDetailsStyle = styled.main`
.return-products-section{
  margin: 0 6vw;
  margin-bottom: 4rem;
}

.return-btn {
  display: flex;
  align-items: center;
  font-weight: 900;
  color: var(--color-text-dark);
  gap: 1.2em;
  border: none;
  outline: none;
  background-color: transparent;
  transition: 0.3s;
}

.return-btn:hover {
  color: var(--color-secondary);
  scale: 1.05;
}

.arrow-icon {
  font-size: 3rem;
}

.product-detail-section{
  display: flex;
  margin: 0 6vw 8rem;
  gap: 10%;
  justify-content:center;
  color: var(--color-text-dark);
}

.img-container {
  width: 40%;
  display: flex;
  justify-content: flex-end;
}

.product-img {
  width: 80%;
  box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 4px 0px;
  border-radius: 1rem;
}

.infos-container {
  width: 40%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 3rem;
}

.product-name {
  color: #373737;
}

.product-price {
  font-weight: 900;
}

.counter_container{
  text-align: center;
  font-size: 1.5rem;
  width: fit-content;
}

.counter{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 3rem;
  width: 100%;
}

.button_counter{
  padding: 1.2rem 1.8rem;
  color: var(--color-text-dark);
  font-size: 2rem;
  outline: none;
  border: none;
  font-weight : 900;
  box-shadow: rgba(0, 0, 0, 0.8) 0px 0 4px 0px;
  transition: 0.2s;
}

.button_counter:active{
  box-shadow: rgba(0, 0, 0, 1) 0px 0 4px 1px;
}

.quantity {
  padding: 1.2rem;
  color: var(--color-text-dark);
  outline: none;
  border: none;
  width: 16rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight : 900;
  box-shadow: rgba(0, 0, 0, 0.8) 0px 0 4px 0px;
}

.cart-btn{
  width: 100%;
  color: #272727;
  display: flex;
  padding: 0.6em 0.8em;
  box-shadow: rgba(0, 0, 0, 0.8) 0px 0 4px 0px;
  justify-content: space-between;
  background-color: var(--color-tertiary);
  border-radius: 1.5rem;
  font-weight: 700;
  border: none;
  outline: none;
  transition: all 0.5s ease-in-out;
}

.cart-btn:hover{
  box-shadow: rgba(0, 0, 0, 1) 0 0px 4px 1px;
}

.carrousel-category-container{
  display: flex;
  flex-direction: column;
  margin: 0 6vw;
}

.carrousel-title{
  color: #373737;
  font-weight: 900;
  margin-bottom: 0.5em;
}
`;

export default ProductDetailsStyle;
