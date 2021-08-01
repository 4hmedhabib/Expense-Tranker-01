import './ExpenseItem.css';
import ExpnesData from './ExpnesData';
import  Card  from '../UI/Card';
import { useState } from 'react';

const ExpenseItem = ({title, amount, date}) => {
    const [titles, setTitles] = useState(title);
    const clickHandler = () => {
        setTitles('Updated!')
    }

    return (
        <Card className='expense-item'>
            <ExpnesData date={date} />
            <div className="expense-item__description">
                <h2>{titles}</h2>
                <div className="expense-item__price">
                    ${amount}
                </div>
                <button onClick={clickHandler}>change title</button>
            </div>
        </Card>
    )
}

export default ExpenseItem
