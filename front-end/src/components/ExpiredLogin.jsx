import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function ExpiredLogin() {
  const history = useHistory();

  const timer = 3000;
  useEffect(() => {
    setTimeout(() => {
      history.push('/login');
    }, timer);
  }, [history]);

  return (
    <div>
      <h1>Seu login expirou!</h1>
    </div>
  );
}
