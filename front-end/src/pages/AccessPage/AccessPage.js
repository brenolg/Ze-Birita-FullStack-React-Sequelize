import React, { useContext } from 'react';
import AccessPageForm from './FormComponent';
import Context from '../../context/Context';

export default function AccessPage() {
  const { logIn } = useContext(Context);

  return (
    <AccessPageForm logIn={ logIn } />
  );
}
