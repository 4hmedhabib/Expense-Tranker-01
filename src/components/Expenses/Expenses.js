import './Expenses.css'
import ExpenseItem from '../ExpenseItem'
import  Card  from "../UI/Card"

const expenses = ({expenses}) => {
    return (
        <Card className='expenses'>
             {expenses.map((expense, i)=> <ExpenseItem key={i} title={expense.title} amount={expense.amount} date={expense.date} /> )}
        </Card>
    )
}

export default expenses
