const url = `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`;
const appJson = 'application/json';

export async function fetchLogin(data) {
  console.log('fetch login inicio', data, url);
  const response = await fetch(`${url}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': appJson,
    },
    body: JSON.stringify(data),
  });
  const loginData = await response.json();
  console.log('fetch login response', loginData);
  return loginData;
}

export async function fetchRegister(data) {
  const response = await fetch(`${url}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': appJson,
    },
    body: JSON.stringify(data),
  });
  const loginData = await response.json();
  return loginData;
}

export async function getProducts() {
  const response = await fetch(`${url}/products`, {
    method: 'GET',
  });
  const productsData = await response.json();
  // console.log(productsData);
  return productsData;
}

export async function postSale(data) {
  const response = await fetch(`${url}/customer/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': appJson,
    },
    body: JSON.stringify(data),
  });
  const saleData = await response.json();
  console.log('fetch Post Sale response', saleData);
  const { message } = saleData;
  console.log('fetch Post Sale message', message);
  return saleData;
}

export async function getUsers() {
  const response = await fetch(`${url}/register`, {
    method: 'GET',
  });
  const usersData = await response.json();
  console.log('fetch GET users response', usersData);
  const { message } = usersData;
  console.log('fetch message', message);
  return usersData;
}
