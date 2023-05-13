import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import Context from './Context';

export default function Provider({ children }) {
  const [logIn, setLogIn] = useState(false);
  const [userData, setUserData] = useState(0);

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
