import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onSaveDataHandler }) => {
	const ExpneseDataHandler = (data) => {
		const ExpenseData = {
			...data
		};
		onSaveDataHandler(ExpenseData);
	};
	return (
		<div className="new-expense">
			<ExpenseForm onSaveExpenseData={ExpneseDataHandler} />
		</div>
	);
};

export default NewExpense;
