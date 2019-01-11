import React from "react";
import Character from "./Character"
import "./StarWars.css";

function CharacterList (props) {
    return (
        // map through data to create a new array of all characters
        // for each character print out a Character component that lists name and birthday
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