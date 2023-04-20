import './index.css';
import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {
  SEARCH_INPUT_VARIANTS,
  SEARCH_VARIANTS,
} from '../Constants';

const Search = ({ animate, searchTerms, inputRef, onSearchChange }) => (
  <div className="view-search-content">
    <FontAwesomeIcon
      color="#212121"
      icon={faSearch}
      onClick={() => window.scrollTo(0, 0)}
    />
    <motion.div
      animate={animate}
      className="view-search-input-container"
      variants={searchTerms ? SEARCH_INPUT_VARIANTS : SEARCH_VARIANTS}
    >
      <input
        ref={inputRef}
        placeholder="Buscar"
        className="view-search"
        onChange={e => onSearchChange(e.target.value)}
        value={searchTerms}
      />
    </motion.div>
  </div>
);

export default Search;
