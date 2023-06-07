import React, { useState, useContext } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import Context from '../context/Context';
import './SearchBar.css';
import { searchProducts } from '../services/APICommunication';

export default function SearchBar() {
  const { setProductList } = useContext(Context);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const history = useHistory();

  const handleOptionChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const notifyNoProducts = () => {
    toast('Nenhum produto foi encontrado com esses filtros', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  const handleSearchProducts = () => {
    searchProducts(category, searchTerm).then((response) => {
      if (response.message) {
        return notifyNoProducts();
      }
      const queryString = new URLSearchParams({
        category,
        name: searchTerm,
      }).toString();

      history.push(`/search?${queryString}`);
      setProductList(response);
    });
  };

  return (
    <>

      <div className="center-header">

        <div className="search-bar">

          <button
            className="search-btn"
            onClick={ handleSearchProducts }
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

          <label htmlFor="vinho" className="radio-label">
            <input
              className="radio-input"
              id="vinho"
              type="radio"
              value="vinho"
              checked={ category === 'vinho' }
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
      <ToastContainer
        position="top-center"
        autoClose={ 3000 }
        hideProgressBar={ false }
        newestOnTop={ false }
        closeOnClick
        rtl={ false }
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>

  );
}
