import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Context from '../../context/Context';
import LocalStorage from '../../services/LocalStorageHandler';
import { postSale, getUsers, getSellers } from '../../services/APICommunication';

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
    getUsers().then((response) => {
      const userOptions = response.filter((user) => (
        user.role === 'customer'
      ));

      // inserir fetch pos merge para buscar os usuarios

      const sellerOptions = response.filter((user) => (
        user.role === 'seller'
      ));

      setUserOptionList(userOptions);
      setUserOptionId(userOptions[0].id);
      setSellerOptionList(sellerOptions);
      setSellerOptionId(sellerOptions[0].id);
    });
  }, []); // Cria as listas de usuários e vendedores no select

  getSellers().then((response) => {
    console.log(response);
  });

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
    console.log(saleBody);
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

    <section className="checkout-main" style={ handleFormVisibility() }>

      <form>
        <label
          htmlFor="clientSelect"
          style={ handleSelectVisibility() }
        >
          Clientes
          <select
            name="clientSelect"
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

        {userData.role !== 'seller' && (
          <label
            htmlFor="sellerSelect"
            style={ handleSelectVisibility() }
          >
            Vendedores
            <select
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

        <label className="label" htmlFor="name">
          <p>Endereço</p>
          <input
            className="input field-address"
            type="text"
            name="address"
            placeholder="xxx"
            value={ handleAddressChange.address }
            onChange={ handleAddressChange }
            minLength="12"
            required
          />
        </label>

        <label className="label" htmlFor="name">
          <p>Numero</p>
          <input
            className="input field-address"
            type="text"
            name="number"
            placeholder="xxx"
            value={ handleAddressChange.number }
            onChange={ handleAddressChange }
            minLength="12"
            required
          />
        </label>

        <button type="button" onClick={ handlePostSale }>
          Finalizar Compra
        </button>

      </form>

      <h1>{error}</h1>

    </section>

  );
}
