import Tabs from '../UI/Tabs';
import styles from '../scss/MoreDetails.module.scss';

const MoreDetails = ({ hourly, tempUnits }) => {

	const getTempForWeek = () => {
		const res = [];
		for (let i = 0; i < hourly.hourly.temperature_2m.length; i += 3) {
			res.push(hourly.hourly.temperature_2m[i]);
		}
		return res;
	}
	const detailedTemperatureData = getTempForWeek();
	
	const getTempForSpecificDay = (tempForEntireWeekArray, startPosition = 0, endPosition = 8) => {
		const copy = tempForEntireWeekArray.slice(startPosition, endPosition);
		return copy;
	}

	const tempForSpecificDay = {
		'Sun': getTempForSpecificDay(detailedTemperatureData, 48, 56),
		'Mon': getTempForSpecificDay(detailedTemperatureData, 0, 8),
		'Tue': getTempForSpecificDay(detailedTemperatureData, 8, 16),
		'Wed': getTempForSpecificDay(detailedTemperatureData, 16, 24),
		'Thu': getTempForSpecificDay(detailedTemperatureData, 24, 32),
		'Fri': getTempForSpecificDay(detailedTemperatureData, 32, 40),
		'Sat': getTempForSpecificDay(detailedTemperatureData, 40, 48),
	}

	return (
		<div className={styles.moreDetails}>
			<Tabs 
				tempForSpecificDay={tempForSpecificDay}
				tempUnits={tempUnits} 
			/>
		</div>
	)
}

export default MoreDetails;