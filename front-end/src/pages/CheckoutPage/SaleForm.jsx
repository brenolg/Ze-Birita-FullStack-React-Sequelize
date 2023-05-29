import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Context from '../../context/Context';
import LocalStorage from '../../services/LocalStorageHandler';
import {
  postSale,
  getSellers,
  getCustomers,
} from '../../services/APICommunication';

export default function SaleForm() {
  const { cartValue, logIn, userData } = useContext(Context);
  const [userAddress, setUserAddress] = useState({
    address: '',
    number: '',
  });
  const [error, setError] = useState(null);
  const [userOptionList, setUserOptionList] = useState([]);
  const [userOptionId, setUserOptionId] = useState();
  const [sellerOptionList, setSellerOptionList] = useState([]);
  const [sellerOptionId, setSellerOptionId] = useState();
  const history = useHistory();

  useEffect(() => {
    getCustomers().then((response) => {
      setUserOptionList(response);
      setUserOptionId(response[0].id);
    });

    getSellers().then((response) => {
      setSellerOptionList(response);
      setSellerOptionId(response[0].id);
    });
  }, []); // Cria as listas de usuários e vendedores no select

  const handleAddressChange = ({ target: { name, value } }) => {
    const newState = { ...userAddress, [name]: value };
    setUserAddress(newState);
  };

  const handlePostSale = async () => {
    const cartList = LocalStorage.get('shopping_cart') || [];

    const shoppingCartValues = cartList.map((product) => {
      const { id, quantity } = product;
      return { productId: id, quantity };
    });

    const eCommerceId = 4;
    let userId;
    let sellerId;

    if (userData.role === 'customer') {
      userId = userData.id;
      sellerId = eCommerceId;
    }

    if (userData.role === 'seller') {
      userId = userOptionId;
      sellerId = userData.id;
    }

    if (userData.role === 'administrator') {
      userId = userOptionId;
      sellerId = sellerOptionId;
    }

    const saleBody = {
      userId,
      sellerId,
      totalPrice: cartValue,
      deliveryAddress: userAddress.address,
      deliveryNumber: userAddress.number,
      shoppingCart: [...shoppingCartValues],
    };

    const newSale = await postSale(saleBody);

    if (newSale.message) {
      return setError(newSale.message);
    }

    history.push(`/orders/${newSale.id}`);
  }; // Cria o objeto de venda e envia para o backend e navegador para a pagina de pedidos

  const handleSelectVisibility = () => {
    let displayValue = 'none';

    if (userData.role !== 'customer') {
      displayValue = 'flex';
    }

    return { display: displayValue };
  }; // Esconde o select de seller caso o usuário logado seja um cliente

  const handleFormVisibility = () => {
    let displayValue = 'none';

    if (logIn) {
      displayValue = 'flex';
    }
    return { display: displayValue };
  }; // Esconde o formulário caso o usuário nao esteja logado e mostra um botão que direciona para a pagina de login

  return (

    <section className="checkout-form-section" style={ handleFormVisibility() }>

      <form className="checkout-form">
        <div className="option-container">
          {userData.role && (
            <label
              className="user-label medium-text"
              htmlFor="clientSelect"
              style={ handleSelectVisibility() }
            >
              Clientes
              <select
                className="checkout-fields medium-text default-input"
                name="clientSelect "
                onChange={ (e) => setUserOptionId(e.target.value) }

              >
                {userOptionList.map((user) => (
                  <option
                    key={ user.id }
                    name={ user.name }
                    value={ user.id }
                  >
                    {user.name}

                  </option>))}
              </select>
            </label>
          )}

          {userData.role && userData.role !== 'seller' && (
            <label
              className="user-label medium-text"
              htmlFor="sellerSelect"
              style={ handleSelectVisibility() }
            >
              Vendedores
              <select
                className="checkout-fields medium-text default-input"
                name="sellerSelect"
                onChange={ (e) => setSellerOptionId(e.target.value) }

              >
                {sellerOptionList.map((seller) => (
                  <option
                    key={ seller.id }
                    name={ seller.name }
                    value={ seller.id }
                  >
                    {seller.name}

                  </option>))}
              </select>
            </label>)}
        </div>

        <div className="option-container">
          <label className="user-label medium-text" htmlFor="name">
            <p>Endereço</p>
            <input
              className="checkout-fields medium-text default-input"
              type="text"
              name="address"
              placeholder="Rua/Av xxx"
              value={ handleAddressChange.address }
              onChange={ handleAddressChange }
              minLength="12"
              required
            />
          </label>

          <label className="user-label medium-text" htmlFor="name">
            <p>Complemento</p>
            <input
              className="checkout-fields medium-text default-input"
              type="text"
              name="number"
              placeholder="Nº xxx"
              value={ handleAddressChange.number }
              onChange={ handleAddressChange }
              minLength="12"
              required
            />
          </label>
        </div>

        <h1 className="erro-message medium-text">{error}</h1>
        <button className="large-text post-btn" type="button" onClick={ handlePostSale }>
          Finalizar Compra
        </button>

      </form>

    </section>

  );
}