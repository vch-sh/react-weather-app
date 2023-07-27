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
	
	const getDataForSpecificDay = (dataForEntireWeekArray, startIndex, endIndex) => {
		return dataForEntireWeekArray.slice(startIndex, endIndex);
	}

	const formObjectDataForSpeciticDay = (detailedData) => {
		const dataObj = {};

		for (let i = 0; i < 7; i++) {
			const startIndex = i * 8;
			const endIndex = startIndex + 8;
			dataObj[i] = getDataForSpecificDay(detailedData, startIndex, endIndex);
		}

		return dataObj;
	}

	const tempForSpecificDay = formObjectDataForSpeciticDay(detailedTemperatureData);
	const humidityForSpecificDay = formObjectDataForSpeciticDay(detailedHumidityData);
	const pressureForSpecificDay = formObjectDataForSpeciticDay(detailedPressureData);
	const cloudcoverForSpecificDay = formObjectDataForSpeciticDay(detailedCloudcoverData);
	const windspeedForSpecificDay = formObjectDataForSpeciticDay(detailedWindSpeedData);
	const rainForSpecificDay = formObjectDataForSpeciticDay(detailedRainData);
	const snowfallForSpecificDay = formObjectDataForSpeciticDay(detailedSnowfallData);

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