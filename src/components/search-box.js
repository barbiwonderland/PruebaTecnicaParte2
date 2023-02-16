import { useState } from "react"
import { AiOutlineSearch } from "react-icons/ai"
function SearchBox({ setInputValue, handleSearch }) {
  return (
    <>
      <div className="search-box">
        <input
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        ></input>
        <button id="btnSearch" onClick={handleSearch}>
          {" "}
          <AiOutlineSearch></AiOutlineSearch>Buscar
        </button>
      </div>
    </>
  )
}

export default SearchBox
