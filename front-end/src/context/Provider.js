import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import Context from './Context';
import DataHandler from '../utils/DataHandler';

export default function Provider({ children }) {
  const [logIn, setLogIn] = useState(false);
  const [userData, setUserData] = useState(0);

  const userHasLogin = async () => {
    const userLogin = await DataHandler.get('user').user || null;
    let hasLogin = false;
    if (userLogin) {
      hasLogin = true;
    }
    if (userData === null) {
      hasLogin = false;
    }
    setLogIn(hasLogin);
    return hasLogin;
  };

  useEffect(() => {
    setLogIn(userHasLogin());
  }, [setUserData, setLogIn]);

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
