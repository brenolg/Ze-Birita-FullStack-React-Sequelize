import styled from 'styled-components';

export const ProductsStyle = styled.div`

  .container_products {
    display: flex;
    flex-flow: wrap;
    gap: 5rem;
    justify-content: space-between;
    padding: 0rem 10rem 10rem;
    position: relative;
  }

  .cart-value-container{
    position: absolute;
    bottom: 10vh;
    right: 10vw;
    font-size: 3rem;
    padding: 1rem;
    border-radius: 2rem;
    background-color: #06514b;
  }

  .card_content{
    width:20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 1px solid black;
    border-radius: 2rem;
  }

  .product_img{
    width: 150px;
    height: 150px;
  }

  .counter_container{
    text-align: center;
    font-size: 1.5rem;
    padding: 0.5rem;
    background-color: #1a8d85;
    width: 100%;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
  }

  .product_name {
    text-align: center;
  }

  .counter{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.5rem;
  }

  .button_counter{
    padding: 0.8rem;
    font-size: 1.5rem;
  }

  .decrease {
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  .increase {
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
  
  .quantity {
    background-color: white;
    padding: 0.8rem;
  }


`;

export default CheckoutStyle;
