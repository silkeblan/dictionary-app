import React from "react";
import { useRef } from "react";
import "./Phonetics.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

export default function Phonetics(props) {
  console.log(props.phonetics);

  const audioElem = useRef();

  function handlePlay(event) {
    event.preventDefault();
    audioElem.current.play();
  }

  if (props.phonetics.audio && props.phonetics.text) {
    return(
        <div className="Phonetics">
          <span className="text"> {props.phonetics.text}</span>  
          <button onClick={handlePlay} className="btn sound-button"><FontAwesomeIcon icon={faVolumeHigh} /> </button>
          <audio src={props.phonetics.audio} ref={audioElem}></audio>
        </div>
          )
  } else if (props.phonetics.text) {
    return (
      <div className="Phonetics">
      <span className="text"> {props.phonetics.text}</span>
      </div>
    )
  } else {
    return (null)
  }
}