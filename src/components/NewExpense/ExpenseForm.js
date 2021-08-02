import { useState } from 'react';
import './ExpenseForm.css';
import moment from 'moment';

const ExpenseForm = () => {
	const [ userInput, setUserInput ] = useState({
		title: '',
		amount: '',
		date: ''
	});

	const titleChangeHandler = (e) => {
		setUserInput((prevState) => {
			return { ...prevState, title: e.target.value };
		});
	};

	const amountChangeHandler = (e) => {
		setUserInput((prevState) => {
			return {
				...prevState,
				amount: e.target.value
			};
		});
	};

	const dateChangeHandler = (e) => {
		setUserInput((prevState) => {
			return { ...prevState, date: e.target.value };
		});
	};

	const submitHandler = (e) => {
		e.preventDefault();
		const expenseData = {
			title: userInput.title,
			amount: userInput.amount,
			date: moment(userInput.data).format('MMMM Do YYYY, h:mm:ss a')
		};
		console.log(expenseData);
	};

	return (
		<div>
			<form onSubmit={submitHandler}>
				<div className="new-expense__controls">
					<div className="new-expense__control">
						<label htmlFor="title">Title</label>
						<input
							type="text"
							name="title"
							id="title"
							value={userInput.title}
							onChange={titleChangeHandler}
						/>
					</div>
					<div className="new-expense__control">
						<label htmlFor="quantity">Quantity</label>
						<input
							type="number"
							min="0.01"
							step="0.01"
							name="quantity"
							id="quantity"
							value={userInput.amount}
							onChange={amountChangeHandler}
						/>
					</div>
					<div className="new-expense__control">
						<label htmlFor="date">Date</label>
						<input type="date" name="date" id="date" value={userInput.date} onChange={dateChangeHandler} />
					</div>
				</div>
				<div className="new-expense__actions">
					<button type="submit">Add Expense</button>
				</div>
			</form>
		</div>
	);
};

export default ExpenseForm;
