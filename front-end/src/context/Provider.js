import PropTypes from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';
import LocalStorage from '../services/LocalStorageHandler';
import Context from './Context';

export default function Provider({ children }) {
  const [logIn, setLogIn] = useState(false);
  const [userData, setUserData] = useState({
    name: '', email: '', role: '', token: '' });

  const userHasLogin = async () => {
    const userLogin = await LocalStorage.get('user');

    let hasLogin = false;

    if (userLogin !== null) {
      hasLogin = true;
    }

    setLogIn(hasLogin);
  };

  useEffect(() => {
    const bool = userHasLogin();
    setLogIn(bool);
  }, [setUserData]);

  const userDataValue = async () => {
    const userValues = await LocalStorage.get('user');
    setUserData({
      name: userValues.name,
      email: userValues.email,
      role: userValues.role,
      token: userValues.token });
  };

  useEffect(() => {
    if (logIn) {
      userDataValue();
    }
  }, [logIn, setLogIn]);

  const value = useMemo(
    () => ({
      logIn,
      setLogIn,
      userData,
      setUserData,
    }),
    [logIn, userData],
  );

  return <Context.Provider value={ value }>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
