import TransactionsListStyle from "~/styles/components/Transactions/TransactionsList.css"
import TransactionItem from "./TransactionItem"

export default function TransactionList({ transactions }) {
  return (
    <div className="transactions-List column">
      {transactions.map((transaction) => (
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
    </div>
  )
}

export function links() {
  return [{ rel: "stylesheet", href: TransactionsListStyle }]
}
