import AddTransactionButton from "../add-transaction-btn"

const ModalForm = () => {
  return (
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
          <label for="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            placeholder="Date"
            required
          />
        </div>
        <div className="column">
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" name="amount" required />
        </div>
      </div>

      <div className="row second-row">
        <div className="column type-section">
          <label htmlFor="type" className="type-title">
            Type
          </label>
          <div className="row radio-btns">
            <input type="radio" name="income" id="income" value="income" />
            <label htmlFor="income" className="income-label">
              Income
            </label>
            <input type="radio" name="expense" id="expense" value="expense" />
            <label htmlFor="expense" className="expense-label">
              Expense
            </label>
          </div>
        </div>
        <div className="column">
          <label htmlFor="description">Description</label>
          <input type="text" id="description" name="description" />
        </div>
      </div>
      <div className="submit-btns">
        <button type="button" className='dismiss-btn'>Dismiss</button>
        <AddTransactionButton />
      </div>
    </form>
  )
}

export default ModalForm
