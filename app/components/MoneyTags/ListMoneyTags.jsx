import MoneyTag from "./MoneyTag"
import MoneyTagStyle from "~/styles/components/MoneyTag/MoneyTag.css"
import MoneyTagsListStyle from "~/styles/components/MoneyTag/ListMoneyTags.css"

export default function ListMoneyTags({income, expense, balance}) {
  return (
    <div className="money-tags-list row">
      <MoneyTag
        cash={`${income}`}
        dominant="Income"
        startGradient="#7DD3FC"
        endGradient="#BAE6FD"
        dominantColor="#1A74C7"
        detailsBgColor="rgba(56, 189, 248, 0.75)"
      />
      <MoneyTag
        cash={`${balance}`}
        dominant="Balance"
        startGradient="#D4D4D8"
        endGradient="#E4E4E7"
        dominantColor="#71717A"
        detailsBgColor="rgba(113, 113, 122, 0.75)"
      />
      <MoneyTag
        cash={`${expense}`}
        dominant="Expense"
        startGradient="#FDA4AF"
        endGradient="#FECDD3 "
        dominantColor="#EF2A4C"
        detailsBgColor="rgba(251, 113, 133, 0.75)"
      />
    </div>
  )
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: MoneyTagStyle,
    },
    {
      rel: "stylesheet",
      href: MoneyTagsListStyle,
    },
  ]
}
