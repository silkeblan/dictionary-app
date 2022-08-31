import React from "react";
import "./Meaning.css"

export default function Meaning(props) {
    return (
    <div className="Meaning">
      {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index} className="definition">
                {index+1}. {definition.definition}
                <br />
                <span className="example"><em>{definition.example}</em></span>
            </div>
          )
        
      })}
    </div>
  );
}