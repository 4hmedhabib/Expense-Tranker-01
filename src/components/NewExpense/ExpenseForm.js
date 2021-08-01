import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value)
    }

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value)
    }

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value)
    }

    return (
        <div>
            <form>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" onChange={titleChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="quantity">Quantity</label>
                        <input type="number" min='0.01' step='0.01' name="quantity" id="quantity" onChange={amountChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="date">Date</label>
                        <input type="date" name="date" id="date" onChange={dateChangeHandler}  />
                     </div>
                </div>
                <div className="new-expense__actions">
                         <button type="submit">Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm
