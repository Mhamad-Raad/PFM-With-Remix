import {
  Form,
  useTransition as useNavigation,
  useActionData,
} from "@remix-run/react"
import { useRef, useState } from "react"
import AddTransactionButton from "../add-transaction-btn"

const ModalForm = ({ closeHandler }) => {
  const [transactionType, setTransactionType] = useState("income")
  const formRef = useRef()
  const navigation = useNavigation()
  const actionData = useActionData()
  const isAdding = navigation.state === "submitting"
  if (isAdding && actionData !== undefined && !actionData.error) {
    console.log("error", actionData.error)
    console.log("adding", isAdding)
    formRef.current?.reset()
    closeHandler()
  }

  const radiobuttonChangeHandler = (e) => {
    console.log(e.target.value)
    setTransactionType(e.target.value)
  }

  const [todaysDate, setTodaysDate] = useState(
    new Date().toISOString().slice(0, 10)
  )

  const dateChangeHandler = (e) => {
    setTodaysDate(e.target.value)
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
            value={todaysDate}
            onChange={dateChangeHandler}
            required
          />
          {actionData?.dateErrorMessage && (
            <p className="error-msg">{actionData.dateErrorMessage}</p>
          )}
        </div>
        <div className="column">
          <label htmlFor="amount">Amount</label>
          <span className="currency-amount">
            <span>$</span>
            <input type="number" id="amount" name="amount" min={0} required />
          </span>
          {actionData?.amountErrorMessage && (
            <p className="error-msg">{actionData.amountErrorMessage}</p>
          )}
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
              onChange={radiobuttonChangeHandler}
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
              onChange={radiobuttonChangeHandler}
            />
            <label htmlFor="expense" className="expense-label">
              Expense
            </label>
          </div>
        </div>
        <div className="column">
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            id="description"
            name="description"
            minLength={0}
            maxLength={350}
            required
          />
          {actionData?.descriptionErrorMessage && (
            <p className="error-msg">{actionData.descriptionErrorMessage}</p>
          )}
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
