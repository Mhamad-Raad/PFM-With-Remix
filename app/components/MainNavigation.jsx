import MainNavigationStyles from "~/styles/components/MainNavigation/MainNavigation.css"
import DollarIcon from "~/assets/Icon/Dollar-Circle-Icon"
import { Link } from "@remix-run/react"

export default function MainNavigation() {
  return (
    <div className="main-nav-bg">
      <div className="main-nav-bg__nav-header">
        <DollarIcon />
        <h1 className="main-nav-bg__nav-title">Finance Manager</h1>
      </div>
      <ul>
        <li>
          <Link to="/">Overview</Link>
        </li>
        <li>
          <Link to="/history">History</Link>
        </li>
      </ul>
    </div>
  )
}

export function links() {
  return [{ rel: "stylesheet", href: MainNavigationStyles }]
}
