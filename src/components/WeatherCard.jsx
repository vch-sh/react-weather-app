import styles from '../scss/WeatherCard.module.scss';

const WeatherCard = ({ currentWeather, locationOutputData }) => {

	const date = new Date();
	const currentDate = {
		day: date.getDate(),
		month: date.getMonth() + 1,
		year: date.getFullYear(),
	}
		
	return (
		<div className={styles.weatherCard}>
			<div>
				{currentDate.day < 10 ? '0' + currentDate.day : currentDate.day}{'-'}
				{currentDate.month < 10 ? '0' + currentDate.month : currentDate.month}{'-'}
				{currentDate.year}
			</div>
			<div>{locationOutputData.name}</div>
			{/* <div>{locationOutputData.region}</div> */}
			<div>{locationOutputData.country}</div>
			<div>{locationOutputData.countryCode}</div>
			<div>{currentWeather.current_weather.temperature}</div>
		</div>
	)
}

export default WeatherCard;