import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = ({ data }) => {
	if (data.length === 0) {
		return <h2 className="expenses-list__fallback">Sorry, Data not found !!!</h2>;
	}
	return (
		<ul className="expenses-list">
			{data.map((expense, i) => (
				<ExpenseItem key={i} title={expense.title} amount={expense.amount} date={expense.date} />
			))}
		</ul>
	);
};

export default ExpensesList;
