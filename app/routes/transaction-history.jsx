import { useLoaderData } from "@remix-run/react"

import UpBar from "~/components/UpBar"
import SearchBar from "~/components/SearchBar"
import FiltersBar, { links as FiltersBarStyle } from "~/components/FiltersBar"
import TransactionList, {
  links as TransactionListStyle,
} from "~/components/Transactions/TransactionList"

export default function transaction_history() {
  const transactions = useLoaderData()
  let allTransactions = []

  Object.keys(transactions)?.forEach((key) => {
    allTransactions.push({
      ...transactions[key],
      id: key,
    })
  })

  return (
    <div className="transaction-history-page column">
      <UpBar title={"Transaction History"} />
      <main>
        <SearchBar />
        <FiltersBar />
        <TransactionList transactions={allTransactions} />
      </main>
    </div>
  )
}

export async function loader() {
  const res = await fetch(
    "https://cash-management-c186c-default-rtdb.firebaseio.com/changes.json"
  )

  return res
}

export function links() {
  return [...TransactionListStyle(), ...FiltersBarStyle()]
}
