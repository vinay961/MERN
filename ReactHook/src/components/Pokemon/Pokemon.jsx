import './Pokemon.css';

import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

function Pokemon(){
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const dataRef = useRef(null);

    async function fetchPokemon() {
        try {
            const result = await fetch('https://pokeapi.co/api/v2/pokemon');
            const data = await result.json();
            dataRef.current = data;

            const detailedPokemon = await Promise.all(
                data.results.map(async (poke) => {
                    const pokeResult = await fetch(poke.url);
                    return pokeResult.json();
                })
            );

            setPokemon(detailedPokemon);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching Pokemon:', error);
        }
    }

    useEffect(() => {
        fetchPokemon();
    },[]);

    async function Next(){
        const result = await fetch(dataRef.current.next);
        const data = await result.json();
        
        const detailedPokemon = await Promise.all(
            data.results.map(async (poke) => {
                const pokeResult = await fetch(poke.url);
                return pokeResult.json();
            })
        );
        setPokemon(detailedPokemon);
        dataRef.current = data;
        setLoading(false);
    }

    async function Previous(){
        const result = await fetch(dataRef.current.previous);
        const data = await result.json();

        const detailedPokemon = await Promise.all(
            data.results.map(async (poke) => {
                const pokeResult = await fetch(poke.url);
                return pokeResult.json();
            })
        );
        setPokemon(detailedPokemon);
        dataRef.current = data;
        setLoading(false);
    }

    return (
        <div className="pokemon">
            {loading && <p>Loading...</p>}
            {pokemon && (
                <div className="pokemon-list">
                    {pokemon.map((poke) => (
                        <div key={poke.name} className="pokemon-item">
                            <img src={poke.sprites.front_default} alt={poke.name} height={"70px"} width={"70px"} />
                            <h2>{poke.name}</h2>
                            <p>Height: {poke.height}</p>
                            <p>Weight: {poke.weight}</p>
                        </div>
                    ))}
                </div>
            )}
            {!loading && pokemon && pokemon.length === 0 && <p>No Pokemon found</p>}

            <div className="d-flex justify-content-center gap-3 my-4">
                <button className="btn btn-outline-primary px-4 py-2 shadow rounded-pill" onClick={Previous} disabled={!dataRef.current.previous}>
                    Previous
                </button>
                <button className="btn btn-outline-secondary px-4 py-2 shadow rounded-pill" onClick={Next}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default Pokemon;