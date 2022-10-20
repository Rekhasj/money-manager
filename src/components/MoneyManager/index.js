import {Component} from 'react'
import {v4} from 'uuid'
import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    type: transactionTypeOptions[0].optionId,
    moneyManager: [],
    amount: 0,
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  onAddButton = event => {
    event.preventDefault()

    const {title, type, amount} = this.state
    const newTypeValue = transactionTypeOptions.find(
      eachMoney => eachMoney.optionId === type,
    )
    const {displayText} = newTypeValue
    // console.log(newTypeValue)
    const newMoneyManager = {
      id: v4(),
      title,
      amount: parseInt(amount),
      type: displayText,
    }
    console.log(type)

    this.setState(preState => ({
      moneyManager: [...preState.moneyManager, newMoneyManager],
      title: '',
      amount: '',
      type: transactionTypeOptions[0].optionId,
    }))
  }

  deleteHistory = id => {
    const {moneyManager} = this.state

    const updatedMoneyManager = moneyManager.filter(
      eachMoney => eachMoney.id !== id,
    )
    this.setState({moneyManager: updatedMoneyManager})
  }

  getBalance = () => {
    const {moneyManager} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    moneyManager.forEach(eachMoney => {
      if (eachMoney.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachMoney.amount
      } else {
        expensesAmount += eachMoney.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount
    return balanceAmount
  }

  getIncome = () => {
    const {moneyManager} = this.state
    // console.log(moneyManager)
    let incomeAmount = 0

    moneyManager.forEach(eachMoney => {
      if (eachMoney.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachMoney.amount
      }
    })
    console.log(incomeAmount)
    return incomeAmount
  }

  getExpenses = () => {
    const {moneyManager} = this.state
    let expensesAmount = 0
    moneyManager.forEach(eachMoney => {
      if (eachMoney.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachMoney.amount
      }
    })
    return expensesAmount
  }

  render() {
    const {moneyManager} = this.state
    const totalBalance = this.getBalance()
    const totalIncome = this.getIncome()
    const totalExpenses = this.getExpenses()
    // console.log(totalBalance)
    // console.log(totalIncome)

    return (
      <div className="home-container">
        <div className="card-container">
          <div className="heading-container">
            <h1 className="heading">Hi,Richard</h1>
            <p className="details">
              Welcome back to your{' '}
              <span className="money-color">Money Manager</span>
            </p>
          </div>
          <div className="money-details-container">
            <MoneyDetails
              totalBalance={totalBalance}
              totalIncome={totalIncome}
              totalExpenses={totalExpenses}
            />
          </div>
          <div className="transaction-container">
            <form className="add-container" onSubmit={this.onAddButton}>
              <h1 className="add-heading">Add Transaction</h1>
              <label htmlFor="title" className="label-name">
                TITLE
              </label>
              <input
                id="title"
                placeholder="TITLE"
                className="input-name"
                onChange={this.onChangeTitle}
              />
              <label htmlFor="amount" className="label-name">
                AMOUNT
              </label>
              <input
                id="amount"
                placeholder="AMOUNT"
                className="input-name"
                onChange={this.onChangeAmount}
              />
              <label htmlFor="type" className="label-name">
                TYPE
              </label>
              <select
                id="type"
                className="input-name"
                onChange={this.onChangeType}
              >
                {transactionTypeOptions.map(eachType => (
                  <option value={eachType.optionId}>
                    {eachType.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="button">
                Add
              </button>
            </form>
            <div className="transaction-item-container">
              <h1 className="heading">History</h1>
              <table>
                <tr>
                  <p> Title</p>
                  <p>Amount</p>
                  <p>Type</p>
                  <th> </th>
                </tr>
                {moneyManager.map(eachMoney => (
                  <TransactionItem
                    moneyManager={eachMoney}
                    key={eachMoney.id}
                    deleteHistory={this.deleteHistory}
                  />
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
