import Pokemon from '../Pokemon/Pokemon.jsx';
import Search from '../Search/Search.jsx';
import './Pokedex.css'

function Pokedex(){
    
  return (
    <div className="pokedex">
      <h1>Pokemon</h1>
      <Search/>
      <Pokemon />
    </div>
  );
}

export default Pokedex;