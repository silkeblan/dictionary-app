import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  
  let [searchword, setSearchword] = useState("");

  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchword}`;
//API documentation: https://dictionaryapi.dev/

  function handleResponse(response) {
    console.log(response);
  }

  function search(event) {
    event.preventDefault();
    alert(`searching for ${searchword}`);
    axios.get(apiUrl).then(handleResponse);
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

