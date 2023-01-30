import UpBarStyles from "~/styles/components/UpBar.css"

export default function UpBar({ title }) {
  return (
    <div className="UpBar-bg">
      <h1 className="title">{title}</h1>
    </div>
  )
}

export function links() {
  return [{ rel: "stylesheet", href: UpBarStyles }]
}
