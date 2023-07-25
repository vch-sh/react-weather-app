import styles from '../scss/WeatherCard.module.scss';

const WeatherCard = ({ hourly, locationOutputData, showDetailsHandler }) => {

	const date = new Date();
	const currentDate = {
		day: date.getDate(),
		month: date.toLocaleString('en', { month: 'long' }),
	}

	const currentlyHourTemp = hourly?.hourly.temperature_2m[new Date().getHours()];
		
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
					{currentlyHourTemp}<span>°</span>
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