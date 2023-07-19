import styles from '../scss/WeatherCard.module.scss';

const WeatherCard = ({ currentWeather, locationOutputData }) => {

	const date = new Date();
	const aaa = date.getUTCMonth();
	const currentDate = {
		day: date.getDate(),
		month: date.getMonth() + 1,
		year: date.getFullYear(),
	}
		
	return (	
		<div className={styles.weatherCard}>
			<div className={styles.weatherCard__textInfo}>
				<div>
					{locationOutputData.name}, {locationOutputData.country} ({locationOutputData.countryCode})
				</div>
				<div>
					{currentDate.day < 10 ? '0' + currentDate.day : currentDate.day}.{currentDate.month < 10 ? '0' + currentDate.month : currentDate.month}.{currentDate.year}
				</div>
			</div>
			<div className={styles.weatherCard__tempInfo}>
				{currentWeather.current_weather.temperature}
			</div>
		</div>
	)
}

export default WeatherCard;