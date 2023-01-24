import { useState } from "react"
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
  return (
    <div className="overview-page">
      {isModalOpen && <Modal />}
      <UpBar title="Overview" />
      <AddTransactionButton clickHandler={switchModaltoTrue} />
    </div>
  )
}

export function links() {
  return [...UpBarStyles(), ...ModalStyles(), ...AddTransactionButtonStyles()]
}
