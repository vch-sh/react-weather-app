import styles from '../scss/WeatherCard.module.scss';

const WeatherCard = ({ currentTemperature, locationOutputData, showDetailsHandler }) => {

	const date = new Date();
	const currentDate = {
		day: date.getDate(),
		month: date.toLocaleString('en', { month: 'long' }),
	}
		
	return (	
		<>
			<div className={styles.weatherCard}>
				<div className={styles.weatherCard__textInfo}>
					<div>
						{locationOutputData.name}, {locationOutputData.country} ({locationOutputData.countryCode})
					</div>
					<div>
						{currentDate.day < 10 ? '0' + currentDate.day : currentDate.day} {currentDate.month < 10 ? '0' + currentDate.month : currentDate.month}
					</div>
				</div>
				<div className={styles.weatherCard__tempInfo}>
					{currentTemperature.current_weather.temperature}<span>°</span>
				</div>
			</div>
			<span 
				className={styles.moreDetails}
				onClick={showDetailsHandler}
			>
				more details
			</span>
		</>
	)
}

export default WeatherCard;