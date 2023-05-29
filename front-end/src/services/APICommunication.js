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

export async function postSale(data) {
  try {
    const response = await fetch(`${url}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': appJson,
      },
      body: JSON.stringify(data),
    });
    const saleData = await response.json();

    return saleData;
  } catch (error) { return error; }
}

export async function getCustomers() {
  try {
    const response = await fetch(`${url}/users/customer`, {
      method: 'GET',
    });
    const usersData = await response.json();

    return usersData;
  } catch (error) { return error; }
}

export async function getSellers() {
  try {
    const response = await fetch(`${url}/users/seller`, {
      method: 'GET',
    });
    const usersData = await response.json();

    return usersData;
  } catch (error) { return error; }
}

export async function getOrderDetails(id) {
  try {
    const response = await fetch(`${url}/orders/${id}`, {
      method: 'GET',
    });
    const usersData = await response.json();

    return usersData;
  } catch (error) { return error; }
}

export async function updateStatus(id, data) {
  try {
    const response = await fetch(`${url}/orders/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': appJson,
      },
      body: JSON.stringify(data),
    });
    const statusData = await response.json();

    return statusData;
  } catch (error) { return error; }
}
