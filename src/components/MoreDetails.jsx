import Tabs from '../UI/Tabs';
import styles from '../scss/MoreDetails.module.scss';
import { useState } from 'react';

const MoreDetails = ({ hourly }) => {
 
	const hourlyUnits = () => {
		console.log(hourly.hourly_units.temperature_2m);
	}
	// hourlyUnits()

	const hourlyTemperature = () => {
		console.log(hourly.hourly.time);
	}
	// hourlyTemperature()

	return (
		<div className={styles.moreDetails}>
			<Tabs />
		</div>
	)
}

export default MoreDetails;