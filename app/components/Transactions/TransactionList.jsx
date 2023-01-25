import TransactionsListStyle from "~/styles/components/Transactions/TransactionsList.css"
import TransactionItem from "./TransactionItem"

export default function TransactionList({ transactions }) {
  return <div className="transactions-List">TransactionList</div>
}

export function links() {
  return [{ rel: "stylesheet", href: TransactionsListStyle }]
}
