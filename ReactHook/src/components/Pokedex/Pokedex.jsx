import Pokemon from '../Pokemon/Pokemon.jsx';
import Search from '../Search/Search.jsx';
import './Pokedex.css'

import { useState } from 'react';

function Pokedex(){
  const [query, setQuery] = useState('');
    
  return (
    <div className="pokedex">
      <Search onSearchChange={setQuery} />
      <Pokemon searchQuery={query} />
    </div>
  );
}

export default Pokedex;