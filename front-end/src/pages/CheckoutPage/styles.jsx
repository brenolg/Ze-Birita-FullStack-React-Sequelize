import styled from 'styled-components';

export const CheckoutStyle = styled.div`

.checkout-main{
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  padding: 0 6vw;
}

.label-div-container{

}

.description{
  font-size: 3rem;
  margin-bottom: 2rem;
}

.cart_content{
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: var(--color-default-grey);
  box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 4px 0px;
  margin-bottom: 2rem;
  height: 4.5rem;
  font-weight: 500;
  border-radius: 1rem;
  align-items: center;
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.8);
  color: var(--color-text-dark);
}

.index-div{
  background-color: var(--color-secondary);
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 1rem 0 0 1rem;
  border-right: 2px solid gray;
  box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 4px 0px;
}

.index-span {
  padding: 0 2rem;
  align-self: center;
  margin: auto;
  color: var(--color-text-light);
}

.product_name {
  width: 50%;
  text-align: left;
  padding-left: 10%;
}

.price-div{
  width: 50%;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-around;
}

.price-item{
  width: 33%;
  display: flex;
  justify-content: flex-end;
  padding: 0 2rem;
  align-items: center;
  height: 100%;
}

.rmv_button{
  background-color: var(--color-secondary);
  height: 100%;
  display: flex;
  padding: 0 2rem;
  align-items: center;
  color: var(--color-text-light);
  transition: 0.2s;
  outline: none;
  border-radius: 0rem 1rem 1rem 0rem;
  box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 4px 0px;
}

.counter{
  height: 100%;
  display: flex;
  align-items: center;
}

.button_counter {
  box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 4px 0px;
  height: 70%;
  color: var(--color-text-dark);
  padding: 0 0.5em;
  outline: none;
  border: none;
  border-color: var(--color-text-light);
}

.button_counter:active {
  box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 4px 1px;
}

.quantity {
  box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 4px 0px;
  height: 70%;
  width: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.total-price {
  box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 4px 1px;
  background-color: var(--color-tertiary);
  color: var(--color-text-light);
  border-radius: 1rem;
  padding: 0.5em 1em;
  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.8);
  margin: 1em 0em 2em auto;
}

.label-div-container {
  display: flex;
  height: 4em;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.label-title {
  margin-bottom: 3rem;
  margin-top: 5rem;
}
.label {
  display: flex;
  align-items: center;
  justify-content: center;
}

.label-index {
  width: 52px;
}
.label-delete {
  width: 145px;
  padding-right : 1rem;
}
.label-name {
  width: 50%;
  padding-right: 22rem;
}
.label-numbers {
  width: 16.6%;
  padding: 0px 2.5rem;
  justify-content: flex-end;
}
.label-price{
  margin-left: 11rem;
}
.label-sub-total {
  padding-right: 4.5rem;
}
.label-quantity  {
  padding-right: 4rem;
}

.checkout-form-section {
  width: 100%;
}

.checkout-form {
  width: 80%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  margin: 0 auto;
}

.checkout-fields{
  margin-top: 0.5em;
  box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 4px 1px;
  height: 3rem;
  border-radius: 1rem;
}

.option-container {
  display: flex;
  justify-content: space-around;
}

.user-label {
  display: flex;
  text-align: left;
  flex-direction: column;
  width: 40%;
  color: var(--color-text-dark);
  margin-bottom: 1.5em;
}
.login-redirect {
  color: var(--color-text-dark);
}
.login-redirect h1 {
  margin-bottom: 2em;
  font-weight: 900;
}
.redirect-login {
  color: var(--color-text-light);
  background-color: var(--color-secondary);
  padding: 0.5em 1em;
  border-radius: 1rem;
  font-weight: 900;
  border: none;
  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.8);
  box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 4px 1px;
  transition: 0.2s;
}
.redirect-login:hover {
  background-color: var(--color-primary);
  box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 4px 2px;
}
.post-btn {
  color: var(--color-text-light);
  background-color: var(--color-secondary);
  padding: 1em 1em;
  border-radius: 1rem;
  font-weight: 900;
  width: 25%;
  margin: 3rem auto;
  border: none;
  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.8);
  box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 4px 1px;
}
.erro-message{
  height:5rem;
  color: var(--color-input-invalid);
}
`;

export default CheckoutStyle;
