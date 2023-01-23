import MainNavigationStyles from "~/styles/components/MainNavigation/MainNavigation.css"
import DollarIcon from "~/assets/Icon/Dollar-Circle-Icon"

export default function MainNavigation() {
  return (
    <div className="MainNavigation">
      <div className="MainNavigation__nav-header">
        <DollarIcon />
        <h1 className="MainNavigation__nav-title">Finance Manager</h1>
      </div>
      <ul>
        <li></li>
      </ul>
    </div>
  )
}

export function links() {
  return [{ rel: "stylesheet", href: MainNavigationStyles }]
}
