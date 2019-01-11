import React from "react";
import "./StarWars.css";

function Character(props) {
    return (
        // Renders out to a character component containing the name and birthday of each character
        <div className="character">
            <p className ="name" >{props.singleCharacter.name}</p>
            <p>Born in {props.singleCharacter.birth_year}</p>
        </div>
    )
}

export default Character;



