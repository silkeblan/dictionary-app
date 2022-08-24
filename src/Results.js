import React from "react";
import Meaning from "./Meaning";
import "./Results.css"

export default function Results(props) {
  if (props.response === null) {
    return (null);
  } else {
    return (
      <div className="Results">
        <h2>{props.response.word}</h2>
        {props.response.meanings.map(function (meaning, index) {
          return(
            <div key={index}>
              <h3>{meaning.partOfSpeech}</h3>
              <Meaning meaning = {meaning}/>
            </div>
          )
        })}
      </div>
    )
  }
}