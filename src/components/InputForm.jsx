import { useState } from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';
import styles from '../scss/InputForm.module.scss';

const InputForm = () => {

	const [text, setText] = useState('');

	const inputHandler = (e) => {
		setText(e.target.value);
	}

	const searchHandler = (e) => {
		e.preventDefault();
	}

	return (
		<form className={styles.inputForm}>
			
			<Input 
				text={text}
				inputHandler={inputHandler}
			/>

			<Button searchHandler={searchHandler}>
				Search
			</Button>

		</form>
	)
}

export default InputForm;