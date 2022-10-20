// Write your code here
import './index.css'

const TransactionItem = props => {
  const {moneyManager, deleteHistory} = props
  const {id, title, amount, type} = moneyManager
  const onClickDelete = () => {
    deleteHistory(id)
  }
  return (
    <tr key={id}>
      <td> {title}</td>
      <td>Rs {amount}</td>
      <td>{type}</td>
      <button
        className="delete-button"
        type="button"
        testid="delete"
        onClick={onClickDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </tr>
  )
}

export default TransactionItem
