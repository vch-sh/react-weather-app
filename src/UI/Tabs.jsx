import { useState } from 'react';
import styles from '../scss/Tabs.module.scss';

const Tabs = ({ hourly, tempForSpecificDay }) => {

	const [toggleState, setToggleState] = useState(1);

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

	// const getTemperatureForSelectedDay = () => {
	// 	const selectedDay = nextWeekDates[toggleState - 1].dayOfWeek;
	// 	return tempForSpecificDay[selectedDay]
	// }

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
									<td>temperature</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
								</tr>
								<tr>
									<td>pressure</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
								</tr>
								<tr>
									<td>humidity</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
								</tr>
								<tr>
									<td>windspeed</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
								</tr>
								<tr>
									<td>cloudcover</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
								</tr>
								<tr>
									<td>visibility</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
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