import { useLoaderData, useLocation } from "@remix-run/react"
import { useState } from "react"

import UpBar from "~/components/UpBar"
import SearchBar from "~/components/SearchBar"
import FiltersBar, { links as FiltersBarStyle } from "~/components/FiltersBar"
import TransactionList, {
  links as TransactionListStyle,
} from "~/components/Transactions/TransactionList"

export default function transaction_history() {
  const params = useLocation()
  // URLSearchParams
  const pageSeaarchParameter = +new URLSearchParams(params.search).get("page")
  const transactions = useLoaderData()
  let allTransactions = []

  Object.keys(transactions)?.forEach((key) => {
    allTransactions.push({
      ...transactions[key],
      id: key,
    })
  })

  const [filteredTransactions, setFilteredTransactions] = useState([])
  const [filterValues, setFilterValues] = useState({
    category: "",
    fromDate: "",
    toDate: "",
  })
  const [filters, setFilters] = useState({
    category: false,
    dates: false,
    filtered: false,
  })

  const searchFilterHandler = (value) => {
    if (filters.category && filters.dates) {
      setFilteredTransactions(
        allTransactions.filter(
          (transaction) =>
            transaction.category === filterValues.category &&
            transaction.date >= filterValues.fromDate &&
            transaction.date <= filterValues.toDate &&
            transaction.description.toLowerCase().includes(value.toLowerCase())
        )
      )
    } else if (filters.category) {
      setFilteredTransactions(
        allTransactions.filter(
          (transaction) =>
            transaction.category === filterValues.category &&
            transaction.description.toLowerCase().includes(value.toLowerCase())
        )
      )
    } else if (filters.dates) {
      setFilteredTransactions(
        allTransactions.filter(
          (transaction) =>
            transaction.date >= filterValues.fromDate &&
            transaction.date <= filterValues.toDate &&
            transaction.description.toLowerCase().includes(value.toLowerCase())
        )
      )
    } else {
      setFilteredTransactions(
        allTransactions.filter((transaction) =>
          transaction.description.toLowerCase().includes(value.toLowerCase())
        )
      )
    }
    setFilters({
      ...filters,
      filtered: true,
    })
  }
  const categoryChangeHandler = (e) => {
    const { value } = e.target
    if (filters.dates) {
      setFilteredTransactions(
        allTransactions.filter(
          (transaction) =>
            transaction.category === value &&
            transaction.date >= filterValues.fromDate &&
            transaction.date <= filterValues.toDate
        )
      )
    } else {
      setFilteredTransactions(
        allTransactions.filter((transaction) => transaction.category === value)
      )
    }
    setFilters({
      ...filters,
      category: true,
      filtered: true,
    })
    setFilterValues({
      ...filterValues,
      category: value,
    })
  }

  const dateFilterHandler = (fromDate, toDate) => {
    if (filters.category) {
      setFilteredTransactions(
        filteredTransactions.filter(
          (transaction) =>
            transaction.date >= fromDate &&
            transaction.date <= toDate &&
            transaction.category === filterValues.category
        )
      )
    } else {
      setFilteredTransactions(
        allTransactions.filter(
          (transaction) =>
            transaction.date >= fromDate && transaction.date <= toDate
        )
      )
    }
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
  }

  const resetFilters = () => {
    setFilteredTransactions([])
    setFilters({
      ...filters,
      category: false,
      dates: false,
      filtered: false,
    })
  }

  let shownTransactions = []
  let numberOfPages
  let pages

  if (filters.filtered) {
    numberOfPages = Math.ceil(filteredTransactions.length / 5)
    pages = []

    for (let i = 0; i < numberOfPages; i++) {
      pages.push(i)
    }
    shownTransactions = filteredTransactions.slice(
      pageSeaarchParameter * 5,
      pageSeaarchParameter * 5 + 5
    )
  } else {
    numberOfPages = Math.ceil(allTransactions.length / 5)
    pages = []

    for (let i = 0; i < numberOfPages; i++) {
      pages.push(i)
    }
    shownTransactions = allTransactions.slice(
      pageSeaarchParameter * 5,
      pageSeaarchParameter * 5 + 5
    )
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
          <a
            href={`?page=${page}`}
            className={pageSeaarchParameter === page ? "active" : undefined}
          >
            {page + 1}
          </a>
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
