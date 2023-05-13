export async function accessFetch(data, login) {
  if (login) {
    const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const loginData = await response.json();
    return loginData;
  }
  const response = await fetch('http://localhost:3001/register', {
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
  const response = await fetch('http://localhost:3001/products', {
    method: 'GET',
  });
  const ProductsData = await response.json();
  return ProductsData;
}
