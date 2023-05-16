import PropTypes from 'prop-types';
import { ProductCardStyle } from './styles';

export default function ProductCard({ id, name, price, url, onAdd, onRemove, quantity }) {
  return (
    <ProductCardStyle>
      <div key={ id } className="content card_content">
        <figure>
          <figcaption className="product_detail">
            R$
            { price }
          </figcaption>
          <img src={ url } alt={ name } />
        </figure>
        <div className="counter_container">
          <p className="product_name">{ name }</p>
          <div className="counter">
            <button
              className="button_counter decrease"
              type="button"
              name="decrease"
              onClick={ onRemove }
            >
              -
            </button>
            <span className="quantity">{ quantity }</span>
            <button
              className="button_counter increase"
              type="button"
              name="increase"
              onClick={ onAdd }
            >
              +
            </button>
          </div>
        </div>
      </div>
    </ProductCardStyle>
  );
}

ProductCard.propTypes = ({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
});
