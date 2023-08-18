import React from 'react';
import { ILocations } from '../types';
import styles from '../scss/SearchOptions.module.scss';

interface SearchOptionsProps {
	locations: ILocations[],
	searchOptionsHandler: (locationId: string) => void,
}

const SearchOptions = ({ locations, searchOptionsHandler }: SearchOptionsProps) => {
	return (
		<>
			<div className={styles.search}>
					{locations.map((location, index) => {
						return (
							<div 
								key={location.id} 
								className={styles.options}
								onClick={() => searchOptionsHandler(location.id)}
							>
								<div>
									{index + 1 + '. '}
									{location.name}
									{(location.admin1 ? ', ' + location.admin1 : '')}, { }
									{location.country} ({location.country_code})
								</div>
							</div>
						)
					})}
				</div>
		</>
	)
}

export default SearchOptions;