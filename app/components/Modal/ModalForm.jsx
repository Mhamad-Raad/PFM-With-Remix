import { Form, useTransition as useNavigation } from "@remix-run/react"
import { useRef, useState } from "react"
import AddTransactionButton from "../add-transaction-btn"

const ModalForm = ({ closeHandler }) => {
  const [transactionType, setTransactionType] = useState("income")
  const formRef = useRef()
  const navigation = useNavigation()
  const isAdding = navigation.state === "submitting"
  console.log(navigation.state)
  if (isAdding) {
    formRef.current?.reset()
    closeHandler()
  }

  const changeHandler = (e) => {
    console.log(e.target.value)
    setTransactionType(e.target.value)
  }

  return (
    <Form ref={formRef} method="post">
      <div className="row">
        <div className="column">
          <label htmlFor="category">Category</label>
          {transactionType === "income" ? (
            <select
              id="category"
              name="category"
              defaultValue={"Gift"}
              required
            >
              <option value="Salary">Salary</option>
              <option value="Loan">Loan</option>
              <option value="Gift">Gift</option>
            </select>
          ) : (
            <select
              id="category"
              name="category"
              defaultValue={"Tech"}
              required
            >
              <option value="Tech">Tech</option>
              <option value="Food">Food</option>
              <option value="Entertainment">Entertainment</option>
            </select>
          )}
        </div>
        <div className="column">
          <label htmlFor="date">Date</label>
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
            <input
              type="radio"
              name="type"
              id="income"
              value="income"
              onChange={changeHandler}
              defaultChecked
            />
            <label htmlFor="income" className="income-label">
              Income
            </label>

            <input
              type="radio"
              name="type"
              id="expense"
              value="expense"
              onChange={changeHandler}
            />
            <label htmlFor="expense" className="expense-label">
              Expense
            </label>
          </div>
        </div>
        <div className="column">
          <label htmlFor="description">Description</label>
          <textarea type="text" id="description" name="description" required />
        </div>
      </div>
      <div className="submit-btns">
        <button type="button" className="dismiss-btn" onClick={closeHandler}>
          Dismiss
        </button>
        <AddTransactionButton type="submit" />
      </div>
    </Form>
  )
}

export default ModalForm
