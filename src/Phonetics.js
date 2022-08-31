import React from "react";
import { useRef } from "react";

export default function Phonetics(props) {
  console.log(props.phonetics);

  const audioElem = useRef();

  function handlePlay(event) {
    event.preventDefault();
    audioElem.current.play();
  }

  return(
    <div className="Phonetics">
      <button onClick={handlePlay} className="btn">LISTEN</button>
      <span> {props.phonetics.text}</span>  
      <audio src={props.phonetics.audio} ref={audioElem}></audio>
    </div>
      )
}