import React from 'react';


const StarWarsChar = props =>{
    return(
        <div className='starWarsCard'>
            <p className='characterAttribute'>Name:<p>{props.starWarsCharacter.name}</p></p>
            <p className='characterAttribute'>Gender:{props.starWarsCharacter.gender}</p>
            <p className='characterAttribute'>Height:{props.starWarsCharacter.height}</p>
            <p className='characterAttribute'>Mass:{props.starWarsCharacter.mass}</p>
            <p className='characterAttribute'>Birth-Year:{props.starWarsCharacter.birth_year}</p>
        </div>
    )
}

export default StarWarsChar;
