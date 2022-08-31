import React from "react";
import Meaning from "./Meaning";
import "./Results.css"
import Synonyms from "./Synonyms";
import Phonetics from "./Phonetics";

export default function Results(props) {
  if (props.response === null) {
    return (null);
  } else {
    return (
      <div className="Results">
        <h2>{props.response.word}</h2>
        {props.response.phonetics.map(function (phonetic, index) {
          return(
            <div key={index}>
              <Phonetics phonetics = {phonetic}/>
            </div>
          )
        })}
        {props.response.meanings.map(function (meaning, index) {
          return(
            <div key={index}>
              <h3>{meaning.partOfSpeech}</h3>
              <Meaning meaning = {meaning}/>
              <Synonyms synonyms = {meaning.synonyms}/>
            </div>
          )
        })}
      </div>
    )
  }
}