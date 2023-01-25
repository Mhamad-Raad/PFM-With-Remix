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

export default function Overview() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const transactions = useLoaderData()

  let userBalance = 0
  let userIncome = 0
  let userExpense = 0

  Object.keys(transactions).forEach(function (key, index) {
    if (transactions[key].type === "income") {
      userIncome += +transactions[key].amount
    } else {
      userExpense += +transactions[key].amount
    }
  })

  userBalance = userIncome - userExpense

  const switchModaltoTrue = () => {
    setIsModalOpen(true)
  }

  const switchModaltoFalse = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="overview-page">
      {isModalOpen && <Modal closeHandler={switchModaltoFalse} />}
      <UpBar title="Overview" />
      <main className="overview-page__content">
        <ListMoneyTags
          income={userIncome}
          expense={userExpense}
          balance={userBalance}
        />
        <AddTransactionButton clickHandler={switchModaltoTrue} />
      </main>
    </div>
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
