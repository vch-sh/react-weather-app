import Tabs from '../UI/Tabs';
import styles from '../scss/MoreDetails.module.scss';

const MoreDetails = ({ hourly }) => {

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
	
	const getDataForSpecificDay = (dataForEntireWeekArray, startPosition, endPosition) => {
		const copy = dataForEntireWeekArray.slice(startPosition, endPosition);
		return copy;
	}

	// Optimize this code
	const tempForSpecificDay = {
		0: getDataForSpecificDay(detailedTemperatureData, 0, 8),
		1: getDataForSpecificDay(detailedTemperatureData, 8, 16),
		2: getDataForSpecificDay(detailedTemperatureData, 16, 24),
		3: getDataForSpecificDay(detailedTemperatureData, 24, 32),
		4: getDataForSpecificDay(detailedTemperatureData, 32, 40),
		5: getDataForSpecificDay(detailedTemperatureData, 40, 48),
		6: getDataForSpecificDay(detailedTemperatureData, 48, 56),
	}

	const humidityForSpecificDay = {
		0: getDataForSpecificDay(detailedHumidityData, 0, 8),
		1: getDataForSpecificDay(detailedHumidityData, 8, 16),
		2: getDataForSpecificDay(detailedHumidityData, 16, 24),
		3: getDataForSpecificDay(detailedHumidityData, 24, 32),
		4: getDataForSpecificDay(detailedHumidityData, 32, 40),
		5: getDataForSpecificDay(detailedHumidityData, 40, 48),
		6: getDataForSpecificDay(detailedHumidityData, 48, 56),
	}

	const pressureForSpecificDay = {
		0: getDataForSpecificDay(detailedPressureData, 0, 8),
		1: getDataForSpecificDay(detailedPressureData, 8, 16),
		2: getDataForSpecificDay(detailedPressureData, 16, 24),
		3: getDataForSpecificDay(detailedPressureData, 24, 32),
		4: getDataForSpecificDay(detailedPressureData, 32, 40),
		5: getDataForSpecificDay(detailedPressureData, 40, 48),
		6: getDataForSpecificDay(detailedPressureData, 48, 56),
	}

	const cloudcoverForSpecificDay = {
		0: getDataForSpecificDay(detailedCloudcoverData, 0, 8),
		1: getDataForSpecificDay(detailedCloudcoverData, 8, 16),
		2: getDataForSpecificDay(detailedCloudcoverData, 16, 24),
		3: getDataForSpecificDay(detailedCloudcoverData, 24, 32),
		4: getDataForSpecificDay(detailedCloudcoverData, 32, 40),
		5: getDataForSpecificDay(detailedCloudcoverData, 40, 48),
		6: getDataForSpecificDay(detailedCloudcoverData, 48, 56),
	}

	const windspeedForSpecificDay = {
		0: getDataForSpecificDay(detailedWindSpeedData, 0, 8),
		1: getDataForSpecificDay(detailedWindSpeedData, 8, 16),
		2: getDataForSpecificDay(detailedWindSpeedData, 16, 24),
		3: getDataForSpecificDay(detailedWindSpeedData, 24, 32),
		4: getDataForSpecificDay(detailedWindSpeedData, 32, 40),
		5: getDataForSpecificDay(detailedWindSpeedData, 40, 48),
		6: getDataForSpecificDay(detailedWindSpeedData, 48, 56),
	}
	
	const rainForSpecificDay = {
		0: getDataForSpecificDay(detailedRainData, 0, 8),
		1: getDataForSpecificDay(detailedRainData, 8, 16),
		2: getDataForSpecificDay(detailedRainData, 16, 24),
		3: getDataForSpecificDay(detailedRainData, 24, 32),
		4: getDataForSpecificDay(detailedRainData, 32, 40),
		5: getDataForSpecificDay(detailedRainData, 40, 48),
		6: getDataForSpecificDay(detailedRainData, 48, 56),
	}

	const snowfallForSpecificDay = {
		0: getDataForSpecificDay(detailedSnowfallData, 0, 8),
		1: getDataForSpecificDay(detailedSnowfallData, 8, 16),
		2: getDataForSpecificDay(detailedSnowfallData, 16, 24),
		3: getDataForSpecificDay(detailedSnowfallData, 24, 32),
		4: getDataForSpecificDay(detailedSnowfallData, 32, 40),
		5: getDataForSpecificDay(detailedSnowfallData, 40, 48),
		6: getDataForSpecificDay(detailedSnowfallData, 48, 56),
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