import { useState } from "react"
import { redirect } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
// import UpBar, { links as UpBarStyles } from "~/components/UpBar"
// import Modal, {
//   links as ModalStyles,
// } from "~/components/Modal/AddTransactionModal"
import AddTransactionButton, {
  links as AddTransactionButtonStyles,
} from "~/components/add-transaction-btn"
// import ListMoneyTags, {
//   links as ListMoneyTagsStyle,
// } from "~/components/MoneyTags/ListMoneyTags"
// import TransactionList, {
//   links as TransactionListStyle,
// } from "~/components/Transactions/TransactionList"

const getWeekNumber = (date) => {
  const weekNumber = Math.floor(date.getDate() / 7)
  return weekNumber
}

const getCurrentWeekNumber = () => {
  const currentDate = new Date()
  const weekNumber = Math.floor(currentDate.getDate() / 7)
  return weekNumber
}

export default function Overview() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const transactions = useLoaderData()

  let userBalance = 0
  let userIncome = 0
  let userExpense = 0

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
    if (currentWeek === getWeekNumber(date)) {
      thisWeekTransactions.push({
        ...transactions[key],
        id: key,
      })
    } else if (date.getMonth() === currentDateMonth) {
      thisMonthTransactions.push({
        ...transactions[key],
        id: key,
      })
    } else if (date.getFullYear() === currentDateYear) {
      thisYearTransactions.push({
        ...transactions[key],
        id: key,
      })
    } else {
      showntransactions.push({
        ...transactions[key],
        id: key,
      })
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
  } else {
    showntransactions.splice(0, 10)
    shownTitle = "No Recent Transaction"
  }

  const switchModaltoTrue = () => {
    setIsModalOpen(true)
  }

  const switchModaltoFalse = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      {/* <Modal closeHandler={switchModaltoFalse} isModalOpen={isModalOpen} /> */}
      <div className="overview-page">
        {/* <UpBar title="Overview" /> */}
        <main className="overview-page__content">
          {/* <ListMoneyTags
            income={userIncome}
            expense={userExpense}
            balance={userBalance}
          /> */}
          <h1 className="overview-page__content__transaction-title">
            {shownTitle}
          </h1>
          {/* <TransactionList transactions={showntransactions} /> */}
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
  let descriptionEr
  let dateEr
  let amountEr
  let error

  if (+body.amount === 1) {
    amountEr = "the amount is too small"
    error = true
  }

  const date = new Date(body.date)
  const currentDate = new Date()
  if (date > currentDate) {
    dateEr = "the date is in the future"
    error = true
  }

  const description = body.description
  const upperCaseLetters = description.match(/[A-Z]/g)
  if (upperCaseLetters?.length > 1) {
    descriptionEr = "the description has more than 1 uppercase"
    error = true
  }

  if (error) {
    return {
      descriptionErrorMessage: descriptionEr,
      dateErrorMessage: dateEr,
      amountErrorMessage: amountEr,
      error,
    }
  }

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
    // ...ModalStyles(),
    ...AddTransactionButtonStyles(),
    // ...ListMoneyTagsStyle(),
    // ...TransactionListStyle(),
  ]
}
