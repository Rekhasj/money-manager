// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {totalBalance, totalIncome, totalExpenses} = props

  return (
    <ul className="money-details-container">
      <li className="list-container color-green">
        <img
          className="image-name"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png "
          alt="balance"
        />
        <div>
          <p className="balance">Your Balance</p>
          <p className="price" testid="balanceAmount">
            {' '}
            Rs {totalBalance}
          </p>
        </div>
      </li>
      <li className="list-container color-blue">
        <img
          className="image-name"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <p className="balance">Your Income</p>
          <p className="price" testid="incomeAmount">
            Rs {totalIncome}
          </p>
        </div>
      </li>
      <li className="list-container color-purple">
        <img
          className="image-name"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <p className="balance">Your Expenses</p>
          <p className="price" testid="expensesAmount">
            Rs {totalExpenses}
          </p>
        </div>
      </li>
    </ul>
  )
}
export default MoneyDetails
