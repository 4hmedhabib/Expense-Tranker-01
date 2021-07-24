import './ExpenseItem.css';
import ExpnesData from './ExpnesData';

const ExpenseItem = ({title, amount, date}) => {
   

    return (
        <div className='expense-item'>
            <ExpnesData date={date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">
                    ${amount}
                </div>
            </div>
        </div>
    )
}

export default ExpenseItem
