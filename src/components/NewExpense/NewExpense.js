import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = ({ onSaveDataHandler }) => {
	const [ isEditing, setIstEditing ] = useState(false);

	const ExpneseDataHandler = (data) => {
		const ExpenseData = {
			...data,
			id: Math.random() * 100
		};
		onSaveDataHandler(ExpenseData);
	};

	const addExpense = () => {
		setIstEditing(true);
	};

	const cancelAddExpense = () => {
		setIstEditing(false);
	};

	return (
		<div className="new-expense">
			{!isEditing && <button onClick={addExpense}>Add New Expense</button>}
			{isEditing && <ExpenseForm onSaveExpenseData={ExpneseDataHandler} onCancel={cancelAddExpense} />}
		</div>
	);
};

export default NewExpense;
