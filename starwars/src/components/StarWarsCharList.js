import React from 'react';
import StarWarsChar from './StarWarsChar'

const StarWarsCharList = props =>{
    console.log(props.starWarsChar)
    return (
        <React.Fragment>
            {
        props.starWarsChar.map(character=>
            <StarWarsChar starWarsCharacter={character}key={character.name} />
            )
            }
        </React.Fragment>
    )
}

export default StarWarsCharList;