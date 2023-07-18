import { useState } from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';
import styles from '../scss/InputForm.module.scss';

const InputForm = ({ text, inputHandler, searchHandler, clickHandler }) => {

	return (
		<form 
			className={styles.inputForm}
			onChange={searchHandler}
		>

			<Input 
				text={text}
				inputHandler={inputHandler}
			/>

			<Button clickHandler={clickHandler}>
				Search
			</Button>

		</form>
	)
}

export default InputForm;