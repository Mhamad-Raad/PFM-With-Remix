import AddTransactionButtonStyles from "~/styles/components/add-transaction-btn.css"

const AddTransactionButton = ({ clickHandler }) => {
  return (
    <button
      type="button"
      className="add-transaction-btn"
      onClick={clickHandler}
    >
      Add Transaction
    </button>
  )
}

export function links() {
  return [{ rel: "stylesheet", href: AddTransactionButtonStyles }]
}

export default AddTransactionButton
