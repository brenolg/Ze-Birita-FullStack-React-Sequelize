import React, { useEffect, useContext, useState } from 'react';
import Context from '../../context/Context';
import LocalStorage from '../../services/LocalStorageHandler';
import { postSale, getUsers } from '../../services/APICommunication';

export default function SaleForm() {
  const { cartValue, logIn, userData } = useContext(Context);
  const [userAddress, setUserAddress] = useState({
    address: '',
    number: '',
  });
  const [error, setError] = useState(null);
  const [sellerList, setSellerList] = useState([]);
  const [sellerId, setSellerId] = useState();

  useEffect(() => {
    getUsers().then((response) => {
      const newOptions = response.filter((user) => (
        user.role === 'seller'
      ));

      setSellerList(newOptions);
      setSellerId(newOptions[0].id);
    });
  }, []);

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

    if (logIn) {
      const body = {
        userId: userData.id,
        sellerId,
        totalPrice: cartValue,
        deliveryAddress: userAddress.address,
        deliveryNumber: userAddress.number,
        shoppingCart: [...shoppingCartValues],
      };
      try {
        await postSale(body);
      } catch (err) {
        setError(err.message);
        console.log('erro', error);
      }
    } setError('erro');
  };

  const handleSelectVisibility = () => {
    let displayValue = 'none';

    if (!logIn && userData.role !== 'customer') {
      displayValue = 'block';
    }
    return { display: displayValue };
  };

  return (

    <section className="checkout-main">

      <form>

        <select
          onChange={ (e) => setSellerId(Number(e.target.value)) }
          style={ handleSelectVisibility() }
        >
          {sellerList.map((seller) => (
            <option
              key={ seller.id }
              name={ seller.name }
              value={ seller.id }
            >
              {seller.name}

            </option>))}
        </select>

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
            type="number"
            name="number"
            placeholder="xxx"
            value={ handleAddressChange.number }
            onChange={ handleAddressChange }
            minLength="12"
            required
          />
        </label>
        <button type="button" onClick={ handlePostSale }>Test</button>
      </form>
      <h1>{error}</h1>
    </section>

  );
}
