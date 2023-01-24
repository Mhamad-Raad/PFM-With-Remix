import ModalStyles from "~/styles/components/AddTransactionModal.css"
import CloseIcon from "~/assets/Icons/CloseIcon"

export default function AddTransactionModal() {
  return (
    <div className="modal-bg">
      <div className="modal">
        <div className="modal__modal-header">
          <h2>Add Transaction</h2>
          <CloseIcon />
        </div>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" />
          <button type="button">Add Transaction</button>
        </form>

        <button className="close-btn">X</button>
      </div>
    </div>
  )
}

export function links() {
  return [{ rel: "stylesheet", href: ModalStyles }]
}
