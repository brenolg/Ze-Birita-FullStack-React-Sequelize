const url = `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`;
const appJson = 'application/json';

export async function fetchLogin(data) {
  try {
    const response = await fetch(`${url}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': appJson,
      },
      body: JSON.stringify(data),
    });
    const loginData = await response.json();

    return loginData;
  } catch (error) { return error; }
}

export async function fetchRegister(data) {
  try {
    const response = await fetch(`${url}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': appJson,
      },
      body: JSON.stringify(data),
    });
    const loginData = await response.json();
    return loginData;
  } catch (error) { return error; }
}

export async function getProducts() {
  try {
    const response = await fetch(`${url}/products`, {
      method: 'GET',
    });
    const productsData = await response.json();

    return productsData;
  } catch (error) { return error; }
}

export async function getProductsByCategory(category) {
  try {
    const response = await fetch(`${url}/products/category/?category=${category}`, {
      method: 'GET',
    });
    const productsData = await response.json();

    return productsData;
  } catch (error) { return error; }
}

export async function searchProducts(category, name) {
  try {
    const response = await
    fetch(`${url}/products/search/?category=${category}&name=${name}`, {
      method: 'GET',
    });
    const productsData = await response.json();

    return productsData;
  } catch (error) { return error; }
}

export async function getProductDetails(id) {
  try {
    const response = await fetch(`${url}/products/${id}`, {
      method: 'GET',
    });
    const productsData = await response.json();

    return productsData;
  } catch (error) { return error; }
}

export async function postSale(data, token) {
  let error = false;
  const response = await fetch(`${url}/orders`, {
    method: 'POST',
    headers: {
      Authorization: `${token}`,
      'Content-Type': appJson,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) error = true;

  const saleData = await response.json();

  return { error, message: saleData.message, status: response.status, data: saleData };
}

export async function getCustomers(token) {
  let error = false;
  const response = await fetch(`${url}/users/customer`, {
    method: 'GET',
    headers: {
      Authorization: `${token}`,
    },
  });
  if (!response.ok) error = true;

  const usersData = await response.json();

  return { error, message: usersData.message, status: response.status, data: usersData };
}

export async function getSellers(token) {
  try {
    const response = await fetch(`${url}/users/seller`, {
      method: 'GET',
      headers: {
        Authorization: `${token}`,
      },
    });
    const usersData = await response.json();

    return usersData;
  } catch (error) { return error; }
}

export async function getOrderDetails(id, token) {
  let error = false;
  const response = await fetch(`${url}/orders/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `${token}`,
    },
  });

  if (!response.ok) error = true;
  const orderData = await response.json();

  return { error, message: orderData.message, status: response.status, data: orderData };
}

export async function getOrders(token) {
  let error = false;
  const response = await fetch(`${url}/orders/user`, {
    method: 'GET',
    headers: {
      Authorization: `${token}`,
    },
  });

  if (!response.ok) error = true;
  const usersData = await response.json();

  return { error, message: usersData.message, status: response.status, data: usersData };
}

export async function updateStatus(id, data, token) {
  let error = false;
  const response = await fetch(`${url}/orders/${id}`, {
    method: 'PATCH',
    headers: {
      Authorization: `${token}`,
      'Content-Type': appJson,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) error = true;
  const statusData = await response.json();

  return {
    error,
    message: statusData.message,
    status: response.status,
    data:
    statusData,
  };
}
