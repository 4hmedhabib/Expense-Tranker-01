const ExpenseForm = () => {
    return (
        <div>
            <form>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" />
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="quantity">Quantity</label>
                        <input type="number" min='0.01' step='0.01' name="quantity" id="quantity" />
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="date">Date</label>
                        <input type="date" name="date" id="date" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm
