import TransactionItemStyle from "~/styles/components/Transactions/TransactionItem.css"
import WorkIcon from "~/assets/Icons/WorkIcon"
import StudyIcon from "~/assets/Icons/StudyIcon"
import TechIcon from "~/assets/Icons/TechIcon"
import { numFormatter } from "~/util/numberConvention"

export default function TransactionItem({ transaction }) {
  const transactionDate = new Date(transaction.date)
  const today = new Date()

  // get the date of yestrday
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)

  let shownDate

  // if the transaction is from today, show "Today"
  if (
    transactionDate.getDate() === today.getDate() &&
    today.getMonth() === transactionDate.getMonth &&
    today.getFullYear() === transactionDate.getFullYear()
  ) {
    shownDate = "Today"
  } else if (
    transactionDate.getDate() === yesterday.getDate() &&
    yesterday.getMonth() === transactionDate.getMonth &&
    yesterday.getFullYear() === transactionDate.getFullYear()
  ) {
    // if the transaction is from yesterday, show "Yesterday"
    shownDate = "Yesterday"
  } else {
    // if the transaction is from any other day, show the date
    shownDate = transactionDate.toLocaleDateString()
  }

  let ShownIcon
  if (transaction.category === "work") {
    ShownIcon = WorkIcon
  } else if (transaction.category === "Tech") {
    ShownIcon = TechIcon
  } else {
    ShownIcon = StudyIcon
  }
  return (
    <div className="item row">
      <div className="item__left row">
        <ShownIcon />
        <div className="item__left__text">
          <p className="item__left__text__title">{transaction.description}</p>
        </div>
      </div>
      <div className="item__right row">
        <p className="item__right__date">{shownDate}</p>
        <p
          className={`item__right__amount ${
            transaction.type === "income" ? "income" : "expense"
          }`}
        >
          {transaction.type === "income"
            ? `+ $${numFormatter(Number(transaction.amount))}`
            : `- $${numFormatter(Number(transaction.amount))}`}
        </p>
      </div>
    </div>
  )
}

export function links() {
  return [{ rel: "stylesheet", href: TransactionItemStyle }]
}
