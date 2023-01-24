import { useState } from "react"
import UpBar, { links as UpBarStyles } from "~/components/UpBar"
import { links as ModalStyles } from "~/components/AddTransactionModal"
import Modal from "~/components/AddTransactionModal"

export default function Overview() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const switchModal = () => {
    setIsModalOpen(!isModalOpen)
  }
  return (
    <div className="overview-page">
      {isModalOpen && <Modal />}
      <UpBar title="Overview" />
      <button type="button" className="overview-page__add-transaction-btn" onClick={switchModal}>
        Add Transaction
      </button>
    </div>
  )
}

export function links() {
  return [...UpBarStyles(), ...ModalStyles()]
}
