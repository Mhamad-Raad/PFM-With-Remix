import TransactionItemStyle from "~/styles/components/Transactions/TransactionItem.css"
import WorkIcon from "~/assets/Icons/WorkIcon"
import StudyIcon from "~/assets/Icons/StudyIcon"
import TechIcon from "~/assets/Icons/TechIcon"

export default function TransactionItem({ transaction }) {
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
          <p className="item__left__text__title">
            {transaction.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export function links() {
  return [{ rel: "stylesheet", href: TransactionItemStyle }]
}
