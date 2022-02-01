import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
import '../components/picturePoke.css'

export const GetPicture = () => {

    const [pokemon, setPokemon] = useState("pikachu");
    const [pokemonData, setPokemonData] = useState([]);



    const getPokemon = async () => {
        const array= [];

        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
            const resp = await fetch (url);
            const data = await resp.json();
            array.push([data]);

            setPokemonData(array);
            console.log(array);

        } catch (error) {
            console.log(error)
        }
    };

    useEffect (()=>{
        getPokemon();
    }, []);



    const handleSubmit = (e)=>{
        e.preventDefault();
        getPokemon();
    }
    const handleChange = (e) =>{
        setPokemon(e.target.value.toLowerCase());
    }

    return (
        <>
            <h1>Pokemon</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        onChange={handleChange}
                        placeholder='Enter Pokemon Name'
                        />
                        
                </label>

            </form>
            <hr/>

            {
                pokemonData.map(([data]) => {
                    return(

                        <div className='card' key={data.id}>
                            <h1>{data.name}</h1>
                            <img className='card-img' src={data.sprites.other.home["front_default"]} alt={data.name}/>

                            <div className='card-body'>

                                <div className='card-item'>
                                    <h3> Height</h3>
                                    <p>{Math.round(data.height*3.9)} " </p>
                                </div>

                                <div className='card-item'>
                                    <h3>Weight</h3>
                                    <p>{Math.round(data.weight / 4.9)} lbs</p>
                                </div>

                                <div className='card-item'>
                                    <h3> Type</h3>
                                    <p>{data.types[0].type.name}</p>
                                </div>

                            </div>
                        </div>
                    )

                })
            }
        </>
    )
}