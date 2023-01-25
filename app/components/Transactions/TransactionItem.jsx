import TransactionItemStyle from "~/styles/components/Transactions/TransactionItem.css"
export default function TransactionItem({ transaction }) {
  return (
    <div className="item row">
      <div className="item__left row">
        
      </div>
    </div>
  )
}

export function links() {
  return [{ rel: "stylesheet", href: TransactionItemStyle }]
}
