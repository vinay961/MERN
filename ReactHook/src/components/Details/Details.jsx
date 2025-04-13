 import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './Details.css';

function Details(){
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState(null);

    async function fetchDetails() {
        try {
            const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await result.json();
            setDetails(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching Pokemon details:', error);
        }
    }

    useEffect(() => {
        fetchDetails();
    }, []);

    return (
        <div className="details">
            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <div className="details-content">
                    <h1>{details.name}</h1>
                    <img src={details.sprites.other.dream_world.front_default} alt={details.name} />
                    <p>Height: {details.height}</p>
                    <p>Weight: {details.weight}</p>
                    <p>Base Experience: {details.base_experience}</p>
                    <h2>Abilities</h2>
                    <ul>
                        {details.abilities.map((ability) => (
                            <li key={ability.ability.name}>{ability.ability.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Details;