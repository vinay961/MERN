import Pokemon from '../Pokemon/Pokemon.jsx';
import Search from '../Search/Search.jsx';
import './Pokedex.css'

function Pokedex(){
    
  return (
    <div className="pokedex">
      <Search/>
      <Pokemon />
    </div>
  );
}

export default Pokedex;