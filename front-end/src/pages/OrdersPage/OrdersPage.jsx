import React from 'react';

import { OrderPageStyle } from './styles';

export default function AccessPage() {
  return (
    <OrderPageStyle>

      <div>Orders</div>
    </OrderPageStyle>
  );
}

// {
//   "userId": 3,
//   "sellerId": 2,
//   "totalPrice": 20,
//   "deliveryAddress": "rua X",
//   "deliveryNumber": 2,
//   "shoppingCart": [
//     { "productId": 1, "quantity": 3 }
//   ]
// } //BODY EXAMPLE

// const storedCart = localStorage.getItem('cart');
// const initialCart = storedCart ? JSON.parse(storedCart) : {};
// const [cart, setCart] = useState(initialCart);
// const [user, setUser] = useState({});
// const [token, setToken] = useState('');
// const [role, setRole] = useState('');
// const [message, setMessage] = useState('');
// const [users, setUsers] = useState([]);
// const [totalValue, setTotalValue] = useState(0);
// // SALES CONTEXT
// const [sales, setSales] = useState([]);

// useEffect(() => {
//   // Compute the new total value based on the current contents of the cart
//   const newTotalValue = Object.values(cart)
//     .reduce((acc, { price, quantity }) => acc + price * quantity, 0);
//   setTotalValue(newTotalValue);
//   localStorage.setItem('cart', JSON.stringify(cart));
// }, [cart]);
// const addToCart = (id, name, price, quantity) => {
//   setCart((prevCart) => ({
//     ...prevCart,
//     [id]: {
//       name,
//       price,
//       quantity,
//     },
//   }));
// };
// Codigo jaider
