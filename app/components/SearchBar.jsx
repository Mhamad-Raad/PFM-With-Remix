import SearchBarIcon from "~/assets/Icons/SearchBarIcon"
import { useRef } from 'react'

export default function SearchBar({ searchHandler }) {
  const searchRef = useRef()

  const onChangeHandler = () => {
    searchHandler(searchRef.current.value)
  }

  const resetSearch = () => {
    searchRef.current.value = ""
    searchHandler("")
  }

  return (
    <span className="search-bar-gr">
      <i className="search-icon">
        <SearchBarIcon />
      </i>
      <input
        ref={searchRef}
        type="text"
        placeholder="Search"
        className="search-input"
        onChange={onChangeHandler}
      />
      <button onClick={resetSearch}>Clear</button>
    </span>
  )
}
