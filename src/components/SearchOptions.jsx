import styles from '../scss/SearchOptions.module.scss';

const SearchOptions = ({ locations }) => {

	return (
		<>
		<div className={styles.search}>
			{locations.map(location => {
				return (
					<div 
						key={location.id} 
						className={styles.options}
					>
						<div>
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