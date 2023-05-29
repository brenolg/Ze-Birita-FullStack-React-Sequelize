import styled from 'styled-components';

const ProductsStyle = styled.div`

  .container_products {
    display: flex;
    flex-flow: wrap;
    gap: 5rem;
    justify-content: space-between;
    padding: 0 6vw 6vw;
    position: relative;
  }

  .card_content{
    width:20%;
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.6) 0px 2px 4px 0px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 2rem;
    transition: 0.3s;
  }

  .animate-shadow {
    box-shadow: rgba(0, 0, 0, 0.6) 0px 2px 4px 0px;
    transition: 0.5s ease-in-out;
  }

  .animate-shadow:hover {
    box-shadow: rgba(0, 0, 0, 0.6) 0px 2px 8px 2px;
  }
  .card_content:hover{
    transform: scale(1.02);
  }

  .figure-product {
    position: relative;
  }

  .product-price{
    position: absolute;
    top: 0;
    left: 0;
    background-color: #0e58609b;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    padding: 0.5em;
    color: var(--color-text-light);
    font-weight: bold;
    text-shadow: 0px 0px 2px black;
  }

  .product_img{
    width: 100%;
    height: 180px;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.8) 0px 2px 4px 0px;
  }

  .counter_container{
    text-align: center;
    font-size: 1.5rem;
    padding: 0.5rem;
    width: 100%;
  }

  .product_name {
    text-align: center;
    padding: 0.5rem;
    color: var(--color-text-dark);
  }

  .counter{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1.2rem;
  }

  .button_counter{
    padding: 0.8rem 1.5rem;
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
    padding: 0.75rem;
    color: var(--color-text-dark);
    outline: none;
    border: none;
    width: 5rem;
    font-weight : 900;
    box-shadow: rgba(0, 0, 0, 0.8) 0px 0 4px 0px;
  }
  
  .cart-value-container{
    bottom: 6vh;
    position: sticky;
    left: 65vw;
    padding: 1rem;
    border-radius: 2rem;
    border: none;
    width: 27vw;
    color: #cfcece;
    display:flex;
    justify-content: space-around;
    align-items: center;
    background-color: #135d5fda;
  }

  .cart-icon{
    color: #323232;
    height: 7rem;
    width: 7rem;
    padding: 0.5rem;
    margin-right: 2rem;
  }
`;

export default ProductsStyle;
