import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AccessPageForm from './FormComponent';
import Context from '../../context/Context';

export default function AccessPage() {
  const { logIn } = useContext(Context);

  return (
    <AccessPageForm logIn={ logIn } />
  );
}

AccessPageForm.propTypes = ({
  logIn: PropTypes.bool.isRequired,
});
