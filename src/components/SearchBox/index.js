import React from 'react';

import 'material-icons/iconfont/material-icons.css';
import './search-box.css';

const SearchBox = () => (
  <div className="search-box">
    <form className="search-box__form">
      <div className="search-box__form__form-control">
        <input
          type="text"
          name="city"
          className="search-box__form__form-control__input"
          placeholder="Insira aqui o nome da cidade"
        />
        <span className="material-icons">search</span>
      </div>
    </form>
  </div>
);

export default SearchBox;
