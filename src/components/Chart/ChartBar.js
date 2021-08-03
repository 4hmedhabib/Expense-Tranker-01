import './ChartBar.css';

const ChartBar = ({ value, label, maxValue, max }) => {
	let filledAmount = '0%';

	if (maxValue > 0) {
		filledAmount = Math.round(value / maxValue * 100) + '%';
	}

	return (
		<div className="chart-bar">
			<div className="chart-bar__inner">
				<div className="chart-bar__fill" style={{ height: filledAmount }} />
			</div>
			<div className="chart-bar__label">{label}</div>
		</div>
	);
};

export default ChartBar;
