const url = `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`;

export async function fetchLogin(data) {
  console.log('fetch login inicio', data, url);
  const response = await fetch(`${url}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
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
      'Content-Type': 'application/json',
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
