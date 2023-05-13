import PropTypes from 'prop-types';
import AccessPageForm from './FormComponent';

export default function AccessPage({ login }) {
  return (
    <AccessPageForm logIn={ login } />
  );
}

AccessPage.propTypes = ({
  login: PropTypes.bool.isRequired,
});
