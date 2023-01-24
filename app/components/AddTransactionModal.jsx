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
          <div className="row">
            <div className="column">
              <label htmlFor="category">Category</label>
              <select id="category" name="category">
                <option value="Tech" selected>
                  Tech
                </option>
                <option value="Food">Food</option>
                <option value="Entertainment">Entertainment</option>
              </select>
            </div>
            <div className="column">
              <label for="birthday">Birthday:</label>
              <input type="date" id="birthday" name="birthday"></input>
            </div>
            <div className="column">
              <label htmlFor="amount">Amount</label>
              <input type="number" id="amount" name="amount" />
            </div>
          </div>

          <div className="row">
            <div className="column">
              <label htmlFor="type">Type</label>
              <div className="row">
                <input type="radio" name="income" id="income" value="income" />
                <label htmlFor="income">Income</label>
                <input
                  type="radio"
                  name="expense"
                  id="expense"
                  value="expense"
                />
                <label htmlFor="expense">Expense</label>
              </div>
            </div>
            <div className="column">
              <label htmlFor="description">Description</label>
              <input type="text" id="description" name="description" />
            </div>
          </div>
          <button type="button">Dismiss</button>
          <button type="button">Add Transaction</button>
        </form>
      </div>
    </div>
  )
}

export function links() {
  return [{ rel: "stylesheet", href: ModalStyles }]
}
