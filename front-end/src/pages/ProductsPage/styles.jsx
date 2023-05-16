import styled from 'styled-components';

const ProductsStyle = styled.div`
  .container_products {
  display: inline-flex;
  flex-flow: wrap;
  gap: 8px;
  justify-content: space-between;
  margin: 32px;
  }
`;

export const ProductCardStyle = styled.div`
    .card_content {
    align-content: space-betweet;
    display: flex;
    height: 200px;
    margin: 12px;
    position: relative;
    width: 135px;
  }

  .product_name {
    font: var(--font-product-name);
    position: absolute;
  }

  .counter_container {
    align-items: flex-end;
    display: inline-flex;
    height: 50px;
    justify-content: center;
    margin: auto;
    width: 100%;
  }

  .counter {
    bottom: 0;
    display: inline-flex;
    height: 30px;
    justify-content: center;
    margin: 8px;
    position: absolute;
    width: 120px;
  }

  .button_counter {
    align-items: center;
    background: #036b52;
    border: var(--border-button);
    border-radius: 8px;
    color: var(--color-bg-light);
    cursor: pointer;
    font: var(--font-details);
    height: 30px;
    position: absolute;
    width: 35px;
  }

  .decrease {
    display: flex;
    justify-content: flex-start;
    left: 15%;
    padding-left: 10px;
    z-index: 0;
  }

  .quantity {
    align-items: center;
    background-color: var(--color-white);

    /* border: var(--border-input); */
    display: flex;
    height: 30px;
    justify-content: center;
    position: absolute;
    width: 32px;
    z-index: 1;
  }

  .increase {
    display: flex;
    justify-content: flex-end;
    padding-right: 8px;
    right: 15%;
    z-index: 0;
  }
`;

export default ProductsStyle;
