import { Link, useLoaderData, useLocation, useNavigate } from "@remix-run/react"

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

  if (
    pageSeaarchParameter === null ||
    pageSeaarchParameter !== pageSeaarchParameter
  )
    pageSeaarchParameter = 0
  const transactions = useLoaderData()

  let filtered = new URLSearchParams(params.search).get("filtered")
  if (filtered === null || filtered === "" || filtered !== filtered)
    filtered = false

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

  const searchFilterHandler = (value) => {
    navigate(
      `/transaction-history?${
        filtered !== null ? `filtered=true` : ``
      }&page=${pageSeaarchParameter}${
        value.trim().length > 0 ? `&search=${value.toLowerCase()}` : ``
      }${categoryParameter !== null ? `&category=${categoryParameter}` : ``}${
        datesP.to !== null ? `&fromDate=${datesP.from}&toDate=${datesP.to}` : ``
      }`
    )
  }
  const categoryChangeHandler = (e) => {
    const { value } = e.target
    navigate(
      `/transaction-history?filtered=true&page=${pageSeaarchParameter}&category=${value}${
        datesP.to !== null ? `&fromDate=${datesP.from}&toDate=${datesP.to}` : ``
      }${searchParameter !== null ? `&search=${searchParameter}` : ``}`
    )
  }

  const dateFilterHandler = (fromDate, toDate) => {
    navigate(
      `/transaction-history?filtered=true&page=${pageSeaarchParameter}${
        categoryParameter !== null ? `&category=${categoryParameter}` : ``
      }&fromDate=${fromDate}&toDate=${toDate}${
        searchParameter !== null ? `&search=${searchParameter}` : ``
      }`
    )
  }

  const resetFilters = () => {
    navigate(
      `/transaction-history?${filtered !== null ? `filtered=true` : ``}${
        searchParameter !== null ? `&search=${searchParameter}` : ``
      }`
    )
  }

  pages = []
  let tempArray = []
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
    tempArray = allTransactions.filter((transaction) => {
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
    tempArray = allTransactions.filter((transaction) => {
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
    tempArray = allTransactions.filter((transaction) => {
      return transaction.date >= datesP.from && transaction.date <= datesP.to
    })
  } else {
    tempArray = allTransactions
  }
  if (searchParameter !== null) {
    tempArray = tempArray.filter((transaction) => {
      return transaction.description.toLowerCase().includes(searchParameter)
    })
  }
  numberOfPages = Math.ceil(tempArray.length / 5)
  if (tempArray.length > 0) {
    shownTransactions = tempArray.slice(
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
            to={`?page=${page}${filtered !== null ? `&filtered=true` : ``}${
              categoryParameter !== null ? `&category=${categoryParameter}` : ``
            }${
              datesP.to !== null
                ? `&fromDate=${datesP.from}&toDate=${datesP.to}`
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
