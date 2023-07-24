import { useState } from 'react';
import styles from '../scss/Tabs.module.scss';

const Tabs = ({
	hourly, 
	tempForSpecificDay,  
	humidityForSpecificDay, 
	pressureForSpecificDay, 
	cloudcoverForSpecificDay, 
	windspeedForSpecificDay,
	rainForSpecificDay,
	snowfallForSpecificDay
}) => {

	const [toggleState, setToggleState] = useState(1);
	const [hourlyUnits, setHourlyUnits] = useState(hourly);

	const toggleTab = (index) => {
		setToggleState(index);
	}

	const getNextWeekDates = () => {
		const date = new Date();
		const daysOfWeekShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
		const currentDate = {
			day: date.getDate(),
			month: date.toLocaleString('en', { month: 'long' }),
			dayOfWeek: daysOfWeekShort[date.getDay()],
		}

		const nextWeekDates = [currentDate];

		let nextDayDate;

		for(let i = 1; i < 7; i++) {
			nextDayDate = new Date(date);
			nextDayDate.setDate(date.getDate() + i);

			const nextDay = {
				day: nextDayDate.getDate(),
				month: nextDayDate.toLocaleString('en', { month: 'long' }),
				dayOfWeek: daysOfWeekShort[nextDayDate.getDay()]
			}
			nextWeekDates.push(nextDay);
		}
		return nextWeekDates;
	}

	const nextWeekDates = getNextWeekDates();

	const getHours = () => {
		const hours = [];
		for (let i = 0; i <= 21; i += 3) {
			hours.push(i < 10 ? '0' + `${i}` + ':00' : i + ':00');
		}
		return hours;
	}
	const hours = getHours();

	const getDataForSpecificDay = (data) => {
		const specificDay = nextWeekDates[toggleState - 1].dayOfWeek;
		return data[specificDay];
	}
	const specificDayTemp = getDataForSpecificDay(tempForSpecificDay);
	const specificDayHumidity = getDataForSpecificDay(humidityForSpecificDay);
	const specificDayPressure = getDataForSpecificDay(pressureForSpecificDay);
	const specificDayCloudcover = getDataForSpecificDay(cloudcoverForSpecificDay);
	const specificDayWindSpeed = getDataForSpecificDay(windspeedForSpecificDay);
	const specificDayRain = getDataForSpecificDay(rainForSpecificDay);
	const specificDaySnowfall = getDataForSpecificDay(snowfallForSpecificDay);

	return (
		<div className={styles.tabs}>
			<div className={styles.tabsNav}>
				
				{nextWeekDates.map((item, index) => (
					<button 
						key={item.dayOfWeek}
						className={toggleState === index + 1 ? styles.tabsNavBtnActive : styles.tabsNavBtn}
						onClick={() => toggleTab(index + 1)}
					>
						{item.day} {item.month}, {item.dayOfWeek}
					</button>
					))}
			</div>

			<div className={styles.tabsContent}>
				{hours.map((_, index) => (
					<div 
						key={index}
						className={toggleState === index + 1 ? styles.tabsContentItemActive : styles.tabsContentItem}
					>
						<table>
							<thead>
								<tr>
									<th>#</th>									
									{hours.map((hour, i) => (
										<th key={i}>{hour}</th>
									))}
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Temperature, <span>{hourlyUnits.hourly_units.temperature_2m}</span></td>
										{specificDayTemp.map((item, index) => (
											<td key={index}>{item}</td>
										))}
								</tr>
								<tr>
									<td>Pressure, mm</td>
										{specificDayPressure.map((item, index) => (
											<td key={index}>{(item * 0.75).toFixed(2)}<span></span></td>
										))}
								</tr>
								<tr>
									<td>Humidity, <span>{hourlyUnits.hourly_units.relativehumidity_2m}</span></td>
									{specificDayHumidity.map((item, index) => (
										<td key={index}>{item ? item : '-'}</td>
									))}
								</tr>
								<tr>  
									<td>Windspeed, <span>{hourlyUnits.hourly_units.windspeed_10m}</span></td>
										{specificDayWindSpeed.map((item, index) => (
											<td key={index}>{item ? item : '-'}</td>
										))}
								</tr>
								<tr> 
									<td>Cloudcover, <span>{hourlyUnits.hourly_units.cloudcover}</span></td>
									{specificDayCloudcover.map((item, index) => (
										<td key={index}>{item ? item : '-'}</td>
									))}
								</tr>
								<tr>
									<td>Rain, <span>{hourlyUnits.hourly_units.rain}</span></td>
										{specificDayRain.map((item, index) => (
											<td key={index}>{item ? item : '-'}</td>
										))}
								</tr>
								<tr>
									<td>Snowfall, <span>{hourlyUnits.hourly_units.snowfall}</span></td>
										{specificDaySnowfall.map((item, index) => (
											<td key={index}>{item ? item : '-'}</td>
										))}
								</tr>
							</tbody>
						</table>
					</div>
				))}
			</div>
		</div>
	)
}

export default Tabs;