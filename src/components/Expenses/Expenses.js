import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import moment from 'moment';

const Expenses = ({ expenses }) => {
	const [ filterYear, setFilterYear ] = useState('2021');

	const FilterChangeHandler = (year) => {
		setFilterYear(year);
	};

	const filteredData = expenses.filter(
		(expense) => (filterYear === moment(expense.date).format('YYYY') ? expense : '')
	);

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter selected={filterYear} onChangeFilter={FilterChangeHandler} />
				<ExpensesList data={filteredData} />
			</Card>
		</div>
	);
};

export default Expenses;
