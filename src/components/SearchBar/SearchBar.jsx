import React from 'react';
import { BsSearch } from 'react-icons/bs';

import './SearchBar.css';

function SearchBar() {
  return (
    <form className="search-bar">
      <input
        type="search"
        placeholder="Buscar produtos"
        className="search_input"
        required
      />

      <button type="submit" className="search_button">
        <BsSearch />
      </button>
    </form>
  );
}

export default SearchBar;
