import { useState } from "react"
import { redirect } from "@remix-run/node"
import UpBar, { links as UpBarStyles } from "~/components/UpBar"
import { links as ModalStyles } from "~/components/Modal/AddTransactionModal"
import Modal from "~/components/Modal/AddTransactionModal"
import AddTransactionButton, {
  links as AddTransactionButtonStyles,
} from "~/components/add-transaction-btn"

export default function Overview() {
  const [isModalOpen, setIsModalOpen] = useState(false)

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

export async function action({ request }) {
  const formData = await request.formData()
  const body = Object.fromEntries(formData.entries())
  console.log(body)

  console.log(request)

  return redirect("/")
}

export function links() {
  return [...UpBarStyles(), ...ModalStyles(), ...AddTransactionButtonStyles()]
}
