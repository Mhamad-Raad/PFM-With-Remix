import FilterBarIcon from "~/assets/Icons/FilterBarIcon"
import FiltersBarStyle from "~/styles/components/FilterBar.css"
import { useMemo, useState } from "react"

export default function FiltersBar({
  categoryChangeHandler,
  dateFilterHandler,
  resetFilters,
}) {
  const [dates, setDates] = useState({
    fromDate: "",
    toDate: "",
  })

  const onDateChange = (e) => {
    const { value } = e.target
    const name = e.target.dataset.name
    setDates({
      ...dates,
      [name]: value,
    })
  }
  useMemo(() => {
    if (dates.toDate < dates.fromDate) {
      return
    }
    if (dates.fromDate && dates.toDate) {
      dateFilterHandler(dates.fromDate, dates.toDate)
    }
  }, [dates])

  return (
    <>
      <div className="filters">
        <>
          <FilterBarIcon />
          <select
            data-name="category"
            id="category"
            name="category"
            defaultValue={"Tech"}
            required
            onChange={categoryChangeHandler}
          >
            <option value="Salary">Salary</option>
            <option value="Loan">Loan</option>
            <option value="Gift">Gift</option>
            <option value="Tech">Tech</option>
            <option value="Food">Food</option>
            <option value="Entertainment">Entertainment</option>
          </select>
          <input
            onChangeCapture={onDateChange}
            data-name="fromDate"
            type="date"
            id="date"
            name="date"
            placeholder="Date"
            required
          />

          <input
            onChangeCapture={onDateChange}
            data-name="toDate"
            type="date"
            id="date"
            name="date"
            placeholder="Date"
            required
          />
        </>
        <button onClick={resetFilters}>Clear</button>
      </div>
      {dates.fromDate > dates.toDate ? (
        <p>to Date can't be smaller than from date</p>
      ) : null}
    </>
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
