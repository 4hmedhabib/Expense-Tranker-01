import './Chart.css';
import ChartBar from './ChartBar';

const Chart = ({ dataPoints }) => {
	const totalMaximum = dataPoints.map((dataPoint) => dataPoint.value);
	const totalMax = dataPoints.map((dataPoint) => Math.floor(dataPoint.value)).reduce((i, value) => {
		return Math.floor(i + value);
	}, 0);

	return (
		<div className="chart">
			{dataPoints.map((dataPoint) => {
				return (
					<ChartBar
						key={dataPoint.label}
						value={dataPoint.value}
						maxValue={Math.max(...totalMaximum)}
						label={dataPoint.label}
					/>
				);
			})}
		</div>
	);
};

export default Chart;
