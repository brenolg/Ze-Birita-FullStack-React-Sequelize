import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../../context/Context';
import { getCustomers, getSellers, postSale } from '../../services/APICommunication';
import handleError from '../../services/HandleError';
import LocalStorage from '../../services/LocalStorageHandler';

export default function SaleForm() {
  const { cartValue, logIn, userData, setLogIn } = useContext(Context);
  const [userOptionList, setUserOptionList] = useState([]);
  const [userOptionId, setUserOptionId] = useState([]);
  const [sellerOptionList, setSellerOptionList] = useState([]);
  const [sellerOptionId, setSellerOptionId] = useState([]);
  const [userAddress, setUserAddress] = useState({
    address: '',
    number: '',
  });
  const history = useHistory();

  useEffect(() => {
    if (userData.token) {
      getCustomers(userData.token).then((response) => {
        if (response.error) {
          handleError.defaultError(response, history, setLogIn);
          return;
        }
        setUserOptionList(response.data);
        setUserOptionId(response.data[0].id);
      });

      getSellers(userData.token).then((response) => {
        setSellerOptionList(response);
        setSellerOptionId(response[0].id);
      });
    }
  }, [userData]); // Cria as listas de usuários e vendedores no select

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

    const roleMapping = {
      customer: {
        userId: userData.id,
        sellerId: eCommerceId,
      },
      seller: {
        userId: userOptionId,
        sellerId: userData.id,
      },
      administrator: {
        userId: userOptionId,
        sellerId: sellerOptionId,
      },
    };

    const userRole = userData.role;

    if (roleMapping[userRole]) {
      ({ userId, sellerId } = roleMapping[userRole]);
    }

    const saleBody = {
      userId,
      sellerId,
      totalPrice: cartValue,
      deliveryAddress: userAddress.address,
      deliveryNumber: userAddress.number,
      shoppingCart: [...shoppingCartValues],
    };

    const newSale = await postSale(saleBody, userData.token);

    if (newSale.error) {
      handleError.admin(newSale, history, setLogIn);
      return;
    }

    history.push(`/orders/${newSale.data.id}`);
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
                {userOptionList && userOptionList.map((user) => (
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
                {sellerOptionList && sellerOptionList.map((seller) => (
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

        <button className="large-text post-btn" type="button" onClick={ handlePostSale }>
          {userData
          && userData.role === 'customer' ? 'Finalizar Compra' : 'Finalizar Venda' }
        </button>

      </form>

    </section>

  );
}
