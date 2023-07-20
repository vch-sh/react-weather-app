import Button from '../UI/Button';
import Input from '../UI/Input';
import {ReactComponent as Loading} from '../assets/loading.svg';
import styles from '../scss/InputForm.module.scss';

const InputForm = ({ text, inputHandler, searchHandler, clickHandler, isLoading, tempUnits, setTempUnits, setShowWeatherCard, setShowDetails }) => {
	
	const tempUnitsHandler = (tempUnits) => {
		setShowWeatherCard(false);
		setShowDetails(false);
		tempUnits === 'celsius' ? setTempUnits('fahrenheit') : setTempUnits('celsius');
	}

	return (
		<form 
			className={styles.inputForm}
			onChange={searchHandler}
		>

			<Input 
				text={text}
				inputHandler={inputHandler}
			/>
			{isLoading && <Loading className={styles.loader} />}

			<div 
				className={styles.tempUnits}
				onClick={() => tempUnitsHandler(tempUnits)}
			>
				<span>°</span><span>{tempUnits[0].toUpperCase()}</span>
			</div>
			
			<Button 
				clickHandler={clickHandler}
			>
				Search
			</Button>

		</form>
	)
}

export default InputForm;