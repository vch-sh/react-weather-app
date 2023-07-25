import { ReactComponent as ClearSky } from '../assets/icons/clear.svg';
import { ReactComponent as Cloud } from '../assets/icons/cloud.svg';
import { ReactComponent as Haze } from '../assets/icons/haze.svg';
import { ReactComponent as Rain } from '../assets/icons/rain.svg';
import { ReactComponent as Snow } from '../assets/icons/snow.svg';
import { ReactComponent as Thunderstorm } from '../assets/icons/storm.svg';
import styles from '../scss/WeatherCard.module.scss';

const WeatherCard = ({ 
	hourly, 
	locationOutputData, 
	showDetailsHandler, 
	weatherCode 
}) => {

	const date = new Date();
	const currentDate = {
		day: date.getDate(),
		month: date.toLocaleString('en', { month: 'long' }),
	}

	const currentlyHourTemp = hourly?.hourly.temperature_2m[new Date().getHours()];

	const showWeatherIcon = () => {
		switch (weatherCode) {
			case 0:
			case 1: 
				return <ClearSky />
			case 2:
			case 3:
				return <Cloud />
			case 45:
			case 48:
				return <Haze />
			case 51:
			case 53:
			case 55:
			case 56:
			case 57:
			case 61:
			case 63:
			case 65:
			case 66:
			case 67:
			case 80:
			case 81:
			case 82:
				return <Rain />
			case 71:
			case 73:
			case 75:
			case 77:
			case 85:
			case 86:
				return <Snow />
			case 95:
			case 96:
			case 99:
				return <Thunderstorm />
		}
	}

	return (	
		<>
			<div className={styles.weatherCard}>
				<div className={styles.weatherCardTextInfo}>
					<div>
						{locationOutputData.name}, {locationOutputData.country} ({locationOutputData.countryCode})
					</div>
					<div>
						{currentDate.day < 10 ? '0' + currentDate.day : currentDate.day} {currentDate.month < 10 ? '0' + currentDate.month : currentDate.month}
					</div>
				</div>
				<div className={styles.currentWeatherIcon}>
					{showWeatherIcon()}
				</div>
				<div className={styles.weatherCardTempInfo}>
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