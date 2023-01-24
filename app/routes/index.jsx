import { useState } from "react"
import { redirect } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import UpBar, { links as UpBarStyles } from "~/components/UpBar"
import { links as ModalStyles } from "~/components/Modal/AddTransactionModal"
import Modal from "~/components/Modal/AddTransactionModal"
import AddTransactionButton, {
  links as AddTransactionButtonStyles,
} from "~/components/add-transaction-btn"

export default function Overview() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const transactions = useLoaderData()

  // using later
  // Object.keys(transactions).forEach(function (key, index) {
  //   console.log('key', key)
  //   console.log('transactions[key]', transactions[key])
  // })

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
      <AddTransactionButton clickHandler={switchModaltoTrue} />
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
  return [...UpBarStyles(), ...ModalStyles(), ...AddTransactionButtonStyles()]
}
