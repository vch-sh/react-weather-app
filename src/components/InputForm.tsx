import React from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';
import Loading from '../assets/loading.svg';
import styles from '../scss/InputForm.module.scss';

interface InputFormProps {
	text: string,
	inputHandler: React.ChangeEventHandler<HTMLInputElement>,
	searchHandler: React.FormEventHandler<HTMLFormElement>,
	clickHandler: React.MouseEventHandler<HTMLButtonElement>,
	isLoading: boolean,
	tempUnits: string,
	setTempUnits: React.Dispatch<React.SetStateAction<string>>,
	setShowWeatherCard: React.Dispatch<React.SetStateAction<boolean>>,
	setShowDetails: React.Dispatch<React.SetStateAction<boolean>>,
}

const InputForm = ({ 
	text, 
	inputHandler, 
	searchHandler, 
	clickHandler, 
	isLoading, 
	tempUnits, 
	setTempUnits, 
	setShowWeatherCard, 
	setShowDetails 
}: InputFormProps) => {
	
	const tempUnitsHandler = (tempUnits: string) => {
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