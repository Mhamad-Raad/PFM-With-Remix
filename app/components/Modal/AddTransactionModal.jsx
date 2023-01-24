import ModalStyles from "~/styles/components/AddTransactionModal.css"
import CloseIcon from "~/assets/Icons/CloseIcon"
import ModalForm from "./ModalForm"

export default function AddTransactionModal() {
  return (
    <div className="modal-bg">
      <div className="modal">
        <div className="modal__modal-header">
          <h2>Add Transaction</h2>
          <CloseIcon />
        </div>
        <ModalForm />
      </div>
    </div>
  )
}

export function links() {
  return [{ rel: "stylesheet", href: ModalStyles }]
}
