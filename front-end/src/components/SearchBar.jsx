import React, { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
// import Context from '../context/Context';
import './SearchBar.css';

export default function SearchBar() {
  // const { setProductList } = useContext(Context);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  const handleOptionChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchProducts = () => {
    console.log(searchTerm);
    console.log(category);
  };

  return (

    <div className="center-header">

      <div className="search-bar">

        <button
          className="search-btn"
          onClick={ searchProducts }
          type="button"
        >
          <BiSearchAlt className="search-icon" />
        </button>

        <input
          className="search-input default-input"
          value={ searchTerm }
          onChange={ handleSearchChange }
          type="text"
          placeholder="Pesquise sua bebida predileta"
        />
      </div>

      <div className="category-search small-text">
        <label htmlFor="cerveja" className="radio-label">
          <input
            className="radio-input"
            id="cerveja"
            type="radio"
            value="cerveja"
            checked={ category === 'cerveja' }
            onChange={ handleOptionChange }
          />
          Cerveja

        </label>

        <label htmlFor="destilado" className="radio-label">
          <input
            className="radio-input"
            id="destilado"
            type="radio"
            value="destilado"
            checked={ category === 'destilado' }
            onChange={ handleOptionChange }
          />
          Destilado

        </label>

        <label htmlFor="vinhos" className="radio-label">
          <input
            className="radio-input"
            id="vinhos"
            type="radio"
            value="vinhos"
            checked={ category === 'vinhos' }
            onChange={ handleOptionChange }
          />
          Vinhos

        </label>

        <label htmlFor="all" className="radio-label">
          <input
            className="radio-input"
            id="all"
            type="radio"
            value="all"
            checked={ category === 'all' }
            onChange={ handleOptionChange }
          />
          Procure por todos

        </label>
      </div>
    </div>

  );
}
