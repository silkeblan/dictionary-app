import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  
  let [searchword, setSearchword] = useState("");


  function search(event) {
    event.preventDefault();
    alert(`searching for ${searchword}`)
  }

  function handleWordChange(event) {
    setSearchword(event.target.value);
  }

  return(
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleWordChange} placeholder="Enter a word..." className="form-control form-control-lg word-search"/>
        <input type="submit" className="btn submit-button"/>
      </form>
    </div>
  )
}

