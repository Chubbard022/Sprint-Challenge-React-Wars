import React from 'react';


const StarWarsChar = props =>{
    return(
        <div className='starWarsCard'>
            <h1 className='characterAttribute title'>Name:{props.starWarsCharacter.name}</h1>
            <p className='characterAttribute'>Gender:{props.starWarsCharacter.gender}</p>
            <p className='characterAttribute'>Eye-Color:{props.starWarsCharacter.eye_color}</p>
            <p className='characterAttribute'>Height:{props.starWarsCharacter.height}</p>
            <p className='characterAttribute'>Mass:{props.starWarsCharacter.mass}</p>
            <p className='characterAttribute'>Birth-Year:{props.starWarsCharacter.birth_year}</p>
            <p className='characterAttribute'>Skin-Color:{props.starWarsCharacter.skin_color}</p>

        </div>
    )
}

export default StarWarsChar;
