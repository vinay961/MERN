import './Pokemon.css';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Pokemon({ searchQuery }) {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [fullPokemonList, setFullPokemonList] = useState([]);
    const dataRef = useRef(null);

    useEffect(() => {
        fetchInitialPokemon();
    }, []);

    useEffect(() => {
        if (searchQuery.length > 0) {
            searchPokemon();
        } else {
            fetchPokemon(dataRef.current?.next || 'https://pokeapi.co/api/v2/pokemon');
        }
    }, [searchQuery]);

    async function fetchInitialPokemon() {
        setLoading(true);
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10000'); // get all names + urls
        const data = await response.json();
        setFullPokemonList(data.results); // this is used for searching
        fetchPokemon('https://pokeapi.co/api/v2/pokemon'); // fetch first page data
    }

    async function fetchPokemon(url) {
        setLoading(true);
        const result = await fetch(url);
        const data = await result.json();
        dataRef.current = data;

        const detailed = await Promise.all(
            data.results.map(async (poke) => {
                const res = await fetch(poke.url);
                return res.json();
            })
        );

        setPokemon(detailed);
        setLoading(false);
    }

    async function searchPokemon() {
        setLoading(true);
        const filtered = fullPokemonList.filter(poke =>
            poke.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        const detailed = await Promise.all(
            filtered.map(async (poke) => {
                const res = await fetch(poke.url);
                return res.json();
            })
        );

        setPokemon(detailed);
        setLoading(false);
    }

    async function Next() {
        if (dataRef.current?.next) {
            fetchPokemon(dataRef.current.next);
        }
    }

    async function Previous() {
        if (dataRef.current?.previous) {
            fetchPokemon(dataRef.current.previous);
        }
    }

    return (
        <div className="pokemon">
            {loading && <p>Loading...</p>}
            {!loading && pokemon && (
                <div className="pokemon-list">
                    {pokemon.map((poke) => (
                        <div key={poke.id} className="pokemon-item">
                            <Link to={`/pokemon/${poke.id}`} className="text-decoration-none text-dark">
                                <img src={poke.sprites.other.dream_world.front_default} alt={poke.name} height={"70px"} width={"70px"} />
                            </Link>
                            <h2>{poke.name}</h2>
                            <p>Height: {poke.height}</p>
                            <p>Weight: {poke.weight}</p>
                        </div>
                    ))}
                </div>
            )}
            {!loading && pokemon.length === 0 && <p>No Pokémon found</p>}

            {/* Show pagination buttons only when not searching */}
            {searchQuery.length === 0 && (
                <div className="d-flex justify-content-center gap-3 my-4">
                    <button className="btn btn-outline-primary px-4 py-2 shadow rounded-pill" onClick={Previous}>
                        Previous
                    </button>
                    <button className="btn btn-outline-secondary px-4 py-2 shadow rounded-pill" onClick={Next}>
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}

export default Pokemon;
