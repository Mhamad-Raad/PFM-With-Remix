import UpBar, { links as UpBarStyles } from "~/components/UpBar"
export default function Overview() {
  return (
    <div className="overview-page">
      <UpBar title="Overview" />
    </div>
  )
}

export function links() {
  return [...UpBarStyles()]
}
