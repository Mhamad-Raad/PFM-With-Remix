import MainNavigationStyles from "./MainNavigation.css"
import DollarIcon from "~/assets/Icon/Dollar-Circle-Icon"

export default function MainNavigation() {
  return (
    <div className="MainNavigation">
      <div className="nav-header">
        <DollarIcon />
        <h1 className="nav-title">Finance Manager</h1>
      </div>
    </div>
  )
}

export function links() {
  return [{ rel: "stylesheet", href: MainNavigationStyles }]
}
