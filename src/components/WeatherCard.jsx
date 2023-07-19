import styles from '../scss/WeatherCard.module.scss';

const WeatherCard = ({ currentTemperature, locationOutputData }) => {

	const date = new Date();
	const aaa = date.getUTCMonth();
	const currentDate = {
		day: date.getDate(),
		month: date.getMonth() + 1,
		year: date.getFullYear(),
	}
		
	return (	
		<>
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
					{currentTemperature.current_weather.temperature}<span>°</span>
				</div>
			</div>
		</>
	)
}

export default WeatherCard;