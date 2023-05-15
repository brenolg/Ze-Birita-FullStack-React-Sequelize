import PropTypes from 'prop-types';

export default function ProductCard({ id, name, price, url }) {
  return (
    <div key={ id }>
      <p>{ price }</p>
      <img src={ url } alt={ name } />
      <p>{ name }</p>
    </div>
  );
}

ProductCard.propTypes = ({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});
