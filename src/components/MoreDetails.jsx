import Tabs from '../UI/Tabs';
import styles from '../scss/MoreDetails.module.scss';

const MoreDetails = ({ hourly, setCurrentWearher }) => {

	const getDataForWeekBySpecificHour = (data) => {
		const res = [];
		for (let i = 0; i < data.length; i += 3) {
			res.push(data[i]);
		}
		return res;
	}
	
	const detailedTemperatureData = getDataForWeekBySpecificHour(hourly.hourly.temperature_2m);
	const detailedHumidityData = getDataForWeekBySpecificHour(hourly.hourly.relativehumidity_2m);
	const detailedPressureData = getDataForWeekBySpecificHour(hourly.hourly.pressure_msl);
	const detailedCloudcoverData = getDataForWeekBySpecificHour(hourly.hourly.cloudcover);
	const detailedWindSpeedData = getDataForWeekBySpecificHour(hourly.hourly.windspeed_10m);
	const detailedRainData = getDataForWeekBySpecificHour(hourly.hourly.rain);
	const detailedSnowfallData = getDataForWeekBySpecificHour(hourly.hourly.snowfall);
	
	const getDataForSpecificDay = (dataForEntireWeekArray, startPosition = 0, endPosition = 8) => {
		const copy = dataForEntireWeekArray.slice(startPosition, endPosition);
		return copy;
	}

	const tempForSpecificDay = {
		'Sun': getDataForSpecificDay(detailedTemperatureData, 48, 56),
		'Mon': getDataForSpecificDay(detailedTemperatureData, 0, 8),
		'Tue': getDataForSpecificDay(detailedTemperatureData, 8, 16),
		'Wed': getDataForSpecificDay(detailedTemperatureData, 16, 24),
		'Thu': getDataForSpecificDay(detailedTemperatureData, 24, 32),
		'Fri': getDataForSpecificDay(detailedTemperatureData, 32, 40),
		'Sat': getDataForSpecificDay(detailedTemperatureData, 40, 48),
	}

	const humidityForSpecificDay = {
		'Sun': getDataForSpecificDay(detailedHumidityData, 48, 56),
		'Mon': getDataForSpecificDay(detailedHumidityData, 0, 8),
		'Tue': getDataForSpecificDay(detailedHumidityData, 8, 16),
		'Wed': getDataForSpecificDay(detailedHumidityData, 16, 24),
		'Thu': getDataForSpecificDay(detailedHumidityData, 24, 32),
		'Fri': getDataForSpecificDay(detailedHumidityData, 32, 40),
		'Sat': getDataForSpecificDay(detailedHumidityData, 40, 48),
	}

	const pressureForSpecificDay = {
		'Sun': getDataForSpecificDay(detailedPressureData, 48, 56),
		'Mon': getDataForSpecificDay(detailedPressureData, 0, 8),
		'Tue': getDataForSpecificDay(detailedPressureData, 8, 16),
		'Wed': getDataForSpecificDay(detailedPressureData, 16, 24),
		'Thu': getDataForSpecificDay(detailedPressureData, 24, 32),
		'Fri': getDataForSpecificDay(detailedPressureData, 32, 40),
		'Sat': getDataForSpecificDay(detailedPressureData, 40, 48),
	}

	const cloudcoverForSpecificDay = {
		'Sun': getDataForSpecificDay(detailedCloudcoverData, 48, 56),
		'Mon': getDataForSpecificDay(detailedCloudcoverData, 0, 8),
		'Tue': getDataForSpecificDay(detailedCloudcoverData, 8, 16),
		'Wed': getDataForSpecificDay(detailedCloudcoverData, 16, 24),
		'Thu': getDataForSpecificDay(detailedCloudcoverData, 24, 32),
		'Fri': getDataForSpecificDay(detailedCloudcoverData, 32, 40),
		'Sat': getDataForSpecificDay(detailedCloudcoverData, 40, 48),
	}

	const windspeedForSpecificDay = {
		'Sun': getDataForSpecificDay(detailedWindSpeedData, 48, 56),
		'Mon': getDataForSpecificDay(detailedWindSpeedData, 0, 8),
		'Tue': getDataForSpecificDay(detailedWindSpeedData, 8, 16),
		'Wed': getDataForSpecificDay(detailedWindSpeedData, 16, 24),
		'Thu': getDataForSpecificDay(detailedWindSpeedData, 24, 32),
		'Fri': getDataForSpecificDay(detailedWindSpeedData, 32, 40),
		'Sat': getDataForSpecificDay(detailedWindSpeedData, 40, 48),
	}
	
	const rainForSpecificDay = {
		'Sun': getDataForSpecificDay(detailedRainData, 48, 56),
		'Mon': getDataForSpecificDay(detailedRainData, 0, 8),
		'Tue': getDataForSpecificDay(detailedRainData, 8, 16),
		'Wed': getDataForSpecificDay(detailedRainData, 16, 24),
		'Thu': getDataForSpecificDay(detailedRainData, 24, 32),
		'Fri': getDataForSpecificDay(detailedRainData, 32, 40),
		'Sat': getDataForSpecificDay(detailedRainData, 40, 48),
	}

	const snowfallForSpecificDay = {
		'Sun': getDataForSpecificDay(detailedSnowfallData, 48, 56),
		'Mon': getDataForSpecificDay(detailedSnowfallData, 0, 8),
		'Tue': getDataForSpecificDay(detailedSnowfallData, 8, 16),
		'Wed': getDataForSpecificDay(detailedSnowfallData, 16, 24),
		'Thu': getDataForSpecificDay(detailedSnowfallData, 24, 32),
		'Fri': getDataForSpecificDay(detailedSnowfallData, 32, 40),
		'Sat': getDataForSpecificDay(detailedSnowfallData, 40, 48),
	}

	return (
		<div className={styles.moreDetails}>
			<Tabs 
				hourly={hourly}
				tempForSpecificDay={tempForSpecificDay}
				humidityForSpecificDay={humidityForSpecificDay}
				pressureForSpecificDay={pressureForSpecificDay}
				cloudcoverForSpecificDay={cloudcoverForSpecificDay}
				windspeedForSpecificDay={windspeedForSpecificDay}
				rainForSpecificDay={rainForSpecificDay}
				snowfallForSpecificDay={snowfallForSpecificDay}
			/>
		</div>
	)
}

export default MoreDetails;