import UpBar from "~/components/UpBar"

export default function transaction_history() {
  return (
    <div className="transaction-history-page column">
      <UpBar title={"Transaction History"} />
      <span className='search-bar'>
        
        <input type="text" placeholder="Search" />

      </span>
    </div>
  )
}
