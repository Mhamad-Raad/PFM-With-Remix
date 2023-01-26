import TransactionsListStyle from "~/styles/components/Transactions/TransactionList.css"
import TransactionItem, {
  links as TransactionItemStyle,
} from "./TransactionItem"

const TransactionList = ({ transactions }) => {
  return (
    <div className="transactions-List column">
      {transactions.map((transaction) => (
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
    </div>
  )
}

export default TransactionList

export function links() {
  return [
    { rel: "stylesheet", href: TransactionsListStyle },
    ...TransactionItemStyle(),
  ]
}
