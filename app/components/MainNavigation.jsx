import MainNavigationStyles from "~/styles/components/MainNavigation/MainNavigation.css"
import DollarIcon from "~/assets/Icon/Dollar-Circle-Icon"
import { NavLink } from "@remix-run/react"

export default function MainNavigation() {
  return (
    <div className="main-nav-bg">
      <div className="main-nav-bg__nav-header">
        <DollarIcon />
        <h1 className="main-nav-bg__nav-title">Finance Manager</h1>
      </div>
      <ul>
        <li>
          <NavLink to="/">Overview</NavLink>
        </li>
        <li>
          <NavLink to="/history">Transaction History</NavLink>
        </li>
      </ul>
    </div>
  )
}

export function links() {
  return [{ rel: "stylesheet", href: MainNavigationStyles }]
}
