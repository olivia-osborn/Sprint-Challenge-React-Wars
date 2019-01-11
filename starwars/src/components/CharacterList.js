import React from "react";
import Character from "./Character"

function CharacterList (props) {
    return (
        props.characters.map(singleCharacter => {
            return(
                <Character 
                singleCharacter={singleCharacter}
                />
            )
        })
    )
}

export default CharacterList;