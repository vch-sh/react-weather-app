import { useState } from 'react';
import styles from '../scss/Tabs.module.scss';

const Tabs = () => {

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
			dayOfWeek: daysOfWeekShort[date.getDay()]
		}

		const weekDates = [currentDate];

		let nextDayDate;

		for(let i = 1; i < 7; i++) {
			nextDayDate = new Date(date);
			nextDayDate.setDate(date.getDate() + i);

			const nextDay = {
				day: nextDayDate.getDate(),
				month: nextDayDate.toLocaleString('en', { month: 'long' }),
				dayOfWeek: daysOfWeekShort[nextDayDate.getDay()]
			}
			weekDates.push(nextDay);
		}
		return weekDates;
	}

	const weekDates = getNextWeekDates();

	const getHours = () => {
		const hours = [];
		for (let i = 0; i < 23; i += 2) {
			hours.push(i < 10 ? '0' + `${i}` + ':00' : i + ':00');
		}
		return hours;
	}
	const hours = getHours();

	return (
		<div className={styles.tabs}>
			<div className={styles.tabsNav}>
				
				{weekDates.map((item, index) => (
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
						{hours.map((hour, i) => (
							<div key={i}>{hour}</div>
						))}
					</div>
				))}
			</div>
		</div>
	)
}

export default Tabs;