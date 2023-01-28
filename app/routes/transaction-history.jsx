import UpBar from "~/components/UpBar"
import SearchBar from "~/components/SearchBar"

export default function transaction_history() {
  return (
    <div className="transaction-history-page column">
      <UpBar title={"Transaction History"} />
      <main>
        <SearchBar />
      </main>
    </div>
  )
}
