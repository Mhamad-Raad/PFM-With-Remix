import UpBar, { links as UpBarStyles } from "~/components/UpBar"
export default function Overview() {
  return (
    <div className="overview-page">
      <UpBar title="Overview" />
      <button type="button" className="overview-page__add-transaction-btn">
        Add Transaction
      </button>
    </div>
  )
}

export function links() {
  return [...UpBarStyles()]
}
