import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = ({ expenses }) => {
	const [ filterYear, setFilterYear ] = useState('2021');

	const FilterChangeHandler = (year) => {
		setFilterYear(year);
	};

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter selected={filterYear} onChangeFilter={FilterChangeHandler} />
				{expenses.map((expense, i) => (
					<ExpenseItem key={i} title={expense.title} amount={expense.amount} date={expense.date} />
				))}
			</Card>
		</div>
	);
};

export default Expenses;
