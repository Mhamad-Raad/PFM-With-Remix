import SearchBarIcon from "~/assets/Icons/SearchBarIcon"

export default function SearchBar() {
  return (
    <span className="search-bar-gr">
      <i className="search-icon">
        <SearchBarIcon />
      </i>
      <input type="text" placeholder="Search" className='search-input' />
      <button>Clear</button>
    </span>
  )
}
