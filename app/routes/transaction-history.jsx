import { Link, useLoaderData, useLocation, useNavigate } from "@remix-run/react"
import { useState } from "react"

import UpBar from "~/components/UpBar"
import SearchBar from "~/components/SearchBar"
import FiltersBar, { links as FiltersBarStyle } from "~/components/FiltersBar"
import TransactionList, {
  links as TransactionListStyle,
} from "~/components/Transactions/TransactionList"

export default function transaction_history() {
  const params = useLocation()
  const navigate = useNavigate()
  // URLSearchParams

  let pageSeaarchParameter = +new URLSearchParams(params.search).get("page")
  let categoryParameter = new URLSearchParams(params.search).get("category")
  let datesP = {}
  datesP.from = new URLSearchParams(params.search).get("fromDate")
  datesP.to = new URLSearchParams(params.search).get("toDate")
  const searchParameter = new URLSearchParams(params.search).get("search")
  let searched = true
  if (
    searchParameter === null ||
    searchParameter !== searchParameter ||
    searchParameter === undefined
  ) {
    searched = false
  }
  if (pageSeaarchParameter === null || pageSeaarchParameter === NaN)
    pageSeaarchParameter = 0
  const transactions = useLoaderData()

  let filtered = new URLSearchParams(params.search).get("filtered")
  if (filtered === null || filtered === "" || filtered === NaN) filtered = false

  let allTransactions = []
  let shownTransactions = []
  let numberOfPages
  let pages = 0
  Object.keys(transactions)?.forEach((key) => {
    allTransactions.push({
      ...transactions[key],
      id: key,
    })
  })

  const [filterValues, setFilterValues] = useState({
    category: "",
    fromDate: "",
    toDate: "",
  })
  const [filters, setFilters] = useState({
    category: false,
    dates: false,
    filtered: filtered,
  })

  const searchFilterHandler = (value) => {
    navigate(
      `/transaction-history?filtered=true&page=${pageSeaarchParameter}${
        value.length > 0 ? `&search=${value.toLowerCase()}` : ``
      }${filters.category ? `&category=${filterValues.category.trim()}` : ``}${
        filters.dates ? `&fromDate=${datesP.from}&toDate=${datesP.to}` : ``
      }`
    )
    setFilters({
      ...filters,
      filtered: true,
    })
  }
  const categoryChangeHandler = (e) => {
    const { value } = e.target
    setFilters({
      ...filters,
      category: true,
      filtered: true,
    })
    setFilterValues({
      ...filterValues,
      category: value,
    })
    navigate(
      `/transaction-history?filtered=true&page=${pageSeaarchParameter}&category=${value}${
        filters.dates
          ? `&fromDate=${datesP.from}&toDate=${datesP.to}${
              searched ? `&search=${searchParameter}` : ``
            }`
          : ``
      }`
    )
  }

  const dateFilterHandler = (fromDate, toDate) => {
    setFilters({
      ...filters,
      dates: true,
      filtered: true,
    })
    setFilterValues({
      ...filterValues,
      fromDate,
      toDate,
    })

    navigate(
      `/transaction-history?filtered=true&page=${pageSeaarchParameter}${
        categoryParameter ? `&category=${categoryParameter}` : ``
      }&fromDate=${fromDate}&toDate=${toDate}${
        searched ? `&search=${searchParameter}` : ``
      }`
    )
  }

  const resetFilters = () => {
    setFilteredTransactions([])
    setFilters({
      ...filters,
      category: false,
      dates: false,
      filtered: false,
    })
    navigate("/transaction-history")
  }

  pages = []
  let temp = []
  if (
    categoryParameter === categoryParameter &&
    categoryParameter !== null &&
    categoryParameter !== undefined &&
    datesP.from === datesP.from &&
    datesP.from !== null &&
    datesP.from !== undefined &&
    datesP.to === datesP.to &&
    datesP.to !== null &&
    datesP.to !== undefined
  ) {
    temp = allTransactions.filter((transaction) => {
      return (
        transaction.category === categoryParameter &&
        transaction.date >= datesP.from &&
        transaction.date <= datesP.to
      )
    })
  } else if (
    categoryParameter === categoryParameter &&
    categoryParameter !== null &&
    categoryParameter !== undefined
  ) {
    temp = allTransactions.filter((transaction) => {
      return transaction.category === categoryParameter
    })
  } else if (
    datesP.from === datesP.from &&
    datesP.from !== null &&
    datesP.from !== undefined &&
    datesP.to === datesP.to &&
    datesP.to !== null &&
    datesP.to !== undefined
  ) {
    temp = allTransactions.filter((transaction) => {
      return transaction.date >= datesP.from && transaction.date <= datesP.to
    })
  } else {
    temp = allTransactions
  }
  if (searched) {
    temp = temp.filter((transaction) => {
      return transaction.description.toLowerCase().includes(searchParameter)
    })
  }
  numberOfPages = Math.ceil(temp.length / 5)
  if (temp.length > 0) {
    shownTransactions = temp.slice(
      pageSeaarchParameter * 5,
      pageSeaarchParameter * 5 + 5
    )
  }
  for (let i = 0; i < numberOfPages; i++) {
    pages.push(i)
  }
  return (
    <div className="transaction-history-page column">
      <UpBar title={"Transaction History"} />
      <main>
        <SearchBar searchHandler={searchFilterHandler} />
        <FiltersBar
          categoryChangeHandler={categoryChangeHandler}
          dateFilterHandler={dateFilterHandler}
          resetFilters={resetFilters}
        />
        <TransactionList transactions={shownTransactions} />
      </main>
      <div className="pages">
        {pages.map((page) => (
          <Link
            to={`?page=${page}${filters.filtered ? `&filtered=true` : ``}${
              categoryParameter !== null ? `&category=${categoryParameter}` : ``
            }${
              filters.dates
                ? `&fromDate=${filterValues.fromDate}&toDate=${filterValues.toDate}`
                : ``
            }`}
            className={pageSeaarchParameter === page ? "active" : ``}
          >
            {page + 1}
          </Link>
        ))}
      </div>
    </div>
  )
}

export async function loader() {
  const res = await fetch(
    "https://cash-management-c186c-default-rtdb.firebaseio.com/changes.json"
  )

  return res
}

export function links() {
  return [...TransactionListStyle(), ...FiltersBarStyle()]
}
