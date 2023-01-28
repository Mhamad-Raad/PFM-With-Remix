import FilterBarIcon from "~/assets/Icons/FilterBarIcon"
import FiltersBarStyle from "~/styles/components/FilterBar.css"

export default function FiltersBar() {
  return (
    <div className="filters">
      <FilterBarIcon />
    </div>
  )
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: FiltersBarStyle,
    },
  ]
}
