import './Search.css';

function Search({onSearchChange}){
    
    return(
        <div className="search">
            <input 
                className='text' 
                type="text" 
                placeholder="Search Pokémon..." 
                onChange={(e)=>{onSearchChange(e.target.value)}}
            />
            <button>Search</button>
        </div>
    )
}

export default Search;