import FilterBarIcon from "~/assets/Icons/FilterBarIcon"
import FiltersBarStyle from "~/styles/components/FilterBar.css"
import { useEffect, useMemo, useState } from "react"
import { useLocation } from "@remix-run/react"

export default function FiltersBar({
  categoryChangeHandler,
  dateFilterHandler,
  resetFilters,
}) {
  const params = useLocation()
  let categoryParameter = new URLSearchParams(params.search).get("category")
  let datesP = {}

  datesP.from = new URLSearchParams(params.search).get("fromDate")
  datesP.to = new URLSearchParams(params.search).get("toDate")

  const [dates, setDates] = useState({
    fromDate: "",
    toDate: "",
  })

  if (
    categoryParameter === null ||
    categoryParameter === "" ||
    categoryParameter !== categoryParameter
  ) {
    categoryParameter = "Tech"
  }

  const onDateChange = (e) => {
    const { value } = e.target
    const name = e.target.dataset.name
    setDates({
      ...dates,
      [name]: value,
    })
  }
  useEffect(() => {
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
            defaultValue={categoryParameter}
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
            defaultValue={datesP.from}
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
            defaultValue={datesP.to}
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
