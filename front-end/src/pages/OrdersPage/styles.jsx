import styled from 'styled-components';

export const OrdersPageStyle = styled.main`
.orders-section{
  display: flex;
  width: 100%;
  padding: 0 6vw;
  justify-content: space-around;
  flex-flow: row wrap;
  gap: 3rem;
  margin-top: 18vh;
  margin-bottom: 3rem;
}

.order-button{
  background-color: var(--color-default-grey);
  box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 4px 0px;
  color: var(--color-text-dark);
  border-radius: 1rem;
  width: 48%;
  display: flex;
  align-items: center;
  justify-content:space-around;
  border: none;
  outline: none;
}

.order-container {
  width: 33%;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  font-weight: 900;
}

.index-container{
  justify-content: center;
  gap: 0,8em;
}

.order-status {
  box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 4px 0px;
  height: 100%;
  background-color: var(--color-secondary);
  justify-content: center;
  color: var(--color-text-light);
  font-size: 2.5rem;
  font-weight: 900;
  padding: 1.2em 0;
}

.order-number-values {
  justify-content: space-around;
  padding: 0 0.3em;
}

.green {
  background-color: var(--color-status-delivered);
}

.orange{
  background-color: var(--color-status-preparing)
}

.red{
  background-color: var(--color-input-invalid);
}

.yellow {
  background-color: var(--color-status-pending);
}

`;

export default OrdersPageStyle;
