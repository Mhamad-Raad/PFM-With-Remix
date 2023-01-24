import ModalStyles from "~/styles/components/AddTransactionModal.css"

export default function AddTransactionModal() {
  return (
    <div className="modal-bg">
      <div className="modal">
        <h2>Add Transaction</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" />
          <button type="submit">Add Transaction</button>
        </form>

        <button className="close-btn">X</button>
      </div>
    </div>
  )
}

export function links() {
  return [{ rel: "stylesheet", href: ModalStyles }]
}
