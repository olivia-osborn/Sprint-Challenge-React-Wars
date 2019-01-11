import React from "react";
import Character from "./Character"
import "./StarWars.css";

function CharacterList (props) {
    return (
        <div className="list">
            {props.characters.map(singleCharacter => {
                return(
                    <Character 
                    singleCharacter={singleCharacter}
                    />
                )
            })}
        </div>
    )
}

export default CharacterList;