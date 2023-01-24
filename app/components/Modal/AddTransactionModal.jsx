import ModalStyles from "~/styles/components/AddTransactionModal.css"
import CloseIcon from "~/assets/Icons/CloseIcon"
import ModalForm from "./ModalForm"

export default function AddTransactionModal({ closeHandler }) {
  return (
    <>
      <div className="modal-bg" onClick={closeHandler} />
      <div className="modal">
        <div className="modal__modal-header">
          <h2>Add Transaction</h2>
          <button onClick={closeHandler}>
            <CloseIcon />
          </button>
        </div>
        <ModalForm closeHandler={closeHandler} />
      </div>
    </>
  )
}

export function links() {
  return [{ rel: "stylesheet", href: ModalStyles }]
}
