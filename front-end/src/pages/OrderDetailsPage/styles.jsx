import styled from 'styled-components';

export const OrderDetailStyle = styled.div`
.order-main{
  padding: 0 6vw;
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
  margin-bottom: 2rem;
}

.return-btn:hover {
  color: var(--color-secondary);
  scale: 1.05;
}

.labels-details-container {
  display: flex;
  justify-content: space-between;
  font-weight: 900;
  color: var(--color-text-dark);
  margin-bottom: 1rem;
}

.label-id {
  width: 5.2rem;
  text-align: center;
}

.label-name {
  width: 50%;
  margin-left: 4rem;
}

.label-quantities{
  width: 16%;
  display: flex;
  justify-content: center;
}

.order-details{
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: var(--color-default-grey);
  box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 4px 0px;
  margin-bottom: 3rem;
  height: 5rem;
  font-weight: 500;
  border-radius: 1rem;
  align-items: center;
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.8);
  color: var(--color-text-dark);
}

.order-id{
  background-color: var(--color-secondary);
  height: 100%;
  color: var(--color-text-light);
  display: flex;
  padding: 0 2rem;
  align-items: center;
  border-radius: 1rem 0 0 1rem;
  border-right: 2px solid gray;
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.8);
  box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 4px 0px;
}

.order-products-container{
  display: flex;  
  align-items: center;
  height: 100%;
}

.order-status {
  height: 100%;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20rem;
  font-size: 2.5rem;
  color: var(--color-text-light);
  box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 4px 0px;
  text-shadow: 0px 0px 1px rgba(0, 0, 0);
  transition: 0.2s;
}

.status-btn {
  height: 100%;
  padding: 0 2rem;
  box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 4px 0px;
  background-color: var(--color-secondary);
  border: none;
  font-weight: 900;
  color: var(--color-text-light);
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.8);
  transition: 0.2s;
}

.status-btn:active {
  box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 6px 2px;
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

.order-itens-container {
  background-color: var(--color-default-grey);
  box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 4px 0px;
  color: var(--color-text-dark);
  border-radius: 1rem;
  height: 4rem;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  justify-content: space-between;
}

.item-name{
  width: 50%;
  margin-left: 4rem;
}

.quantity-div{
  width: 16%;
  display: flex;
  justify-content: center;
}

.total-order-container{
  width: 100%;
  margin-top: 8rem;
  display: flex;
  margin-bottom: 6rem;
  justify-content: flex-end;
  position: relative;
}

.total-order {
  box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 4px 1px;
  background-color: var(--color-tertiary);
  color: var(--color-text-light);
  border-radius: 1rem;
  padding: 0.5em 1em;
  text-shadow: 0px 0px 2px rgba(0, 0, 0);
}

.order-btn {
  background-color: var(--color-secondary);
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  padding: 0.5em 1em;
  border: none;
  font-size: 3rem;
  transition: 0.2s;
  font-weight: 900;
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.8);
}

.order-btn:hover {
  box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 4px 2px;
}


`;

export default OrderDetailStyle;
