import { useState } from "react"
import { redirect } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import UpBar, { links as UpBarStyles } from "~/components/UpBar"
import { links as ModalStyles } from "~/components/Modal/AddTransactionModal"
import Modal from "~/components/Modal/AddTransactionModal"
import AddTransactionButton, {
  links as AddTransactionButtonStyles,
} from "~/components/add-transaction-btn"
import ListMoneyTags, {
  links as ListMoneyTagsStyle,
} from "~/components/MoneyTags/ListMoneyTags"

const getWeekNumber = (date) => {
  const currentDate = new Date()
  const startDate = date
  var days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000))

  var weekNumber = Math.ceil(days / 7)

  return weekNumber
}

const getCurrentWeekNumber = () => {
  const currentDate = new Date()
  const startDate = new Date(currentDate.getFullYear(), 0, 1)
  var days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000))

  var weekNumber = Math.ceil(days / 7)

  return weekNumber
}

export default function Overview() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const transactions = useLoaderData()

  let userBalance = 0
  let userIncome = 0
  let userExpense = 0
  let date

  const currentDateYear = new Date().getFullYear()
  const currentDateMonth = new Date().getMonth()
  const currentWeek = getCurrentWeekNumber()
  let thisYearTransactions = []
  let thisMonthTransactions = []
  let thisWeekTransactions = []
  let showntransactions = []
  let shownTitle = "Empty"

  Object.keys(transactions)?.forEach(function (key) {
    if (transactions[key].type === "income") {
      userIncome += +transactions[key].amount
    } else {
      userExpense += +transactions[key].amount
    }
    const date = new Date(transactions[key].date)
    if (date.getFullYear() === currentDateYear) {
      thisYearTransactions.push({
        ...transactions[key],
        id: key,
      })
      if (date.getMonth() === currentDateMonth) {
        thisMonthTransactions.push({
          ...transactions[key],
          id: key,
        })
        if (getWeekNumber(date) === currentWeek) {
          thisWeekTransactions.push({
            ...transactions[key],
            id: key,
          })
        }
      }
    }
  })
  userBalance = userIncome - userExpense

  if (thisWeekTransactions.length > 0) {
    if (thisWeekTransactions.length > 10) {
      thisWeekTransactions = thisWeekTransactions.slice(0, 10)
    }
    showntransactions = thisWeekTransactions
    shownTitle = "This Week"
  } else if (thisMonthTransactions.length > 0) {
    if (thisMonthTransactions.length > 10) {
      thisMonthTransactions = thisMonthTransactions.slice(0, 10)
    }
    showntransactions = thisMonthTransactions
    shownTitle = "This Month"
  } else if (thisYearTransactions.length > 0) {
    if (thisYearTransactions.length > 10) {
      thisYearTransactions = thisYearTransactions.slice(0, 10)
    }
    showntransactions = thisYearTransactions
    shownTitle = "This Year"
  }

  const switchModaltoTrue = () => {
    setIsModalOpen(true)
  }

  const switchModaltoFalse = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      {isModalOpen && <Modal closeHandler={switchModaltoFalse} />}
      <div className="overview-page">
        <UpBar title="Overview" />
        <main className="overview-page__content">
          <ListMoneyTags
            income={userIncome}
            expense={userExpense}
            balance={userBalance}
          />
          <h1 className="overview-page__content__transaction-title">
            {shownTitle}
          </h1>
          <div className="overview-page__content__transaction-btn-bg">
            <AddTransactionButton clickHandler={switchModaltoTrue} />
          </div>
        </main>
      </div>
    </>
  )
}

export async function loader() {
  const res = await fetch(
    "https://cash-management-c186c-default-rtdb.firebaseio.com/changes.json"
  )

  return res
}

export async function action({ request }) {
  const formData = await request.formData()
  const body = Object.fromEntries(formData.entries())

  await fetch(
    "https://cash-management-c186c-default-rtdb.firebaseio.com/changes.json",
    {
      method: "POST",
      body: JSON.stringify(body),
    }
  )

  return redirect("/")
}

export function links() {
  return [
    ...UpBarStyles(),
    ...ModalStyles(),
    ...AddTransactionButtonStyles(),
    ...ListMoneyTagsStyle(),
  ]
}
