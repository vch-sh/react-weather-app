import React from 'react';
import styles from '../scss/Input.module.scss';

interface InputProps {
	text: string,
	inputHandler: React.ChangeEventHandler<HTMLInputElement>,
}

const Input = ({ text, inputHandler }: InputProps) => {
	return (
		<input 
			type="text"
			className={styles.input}
			value={text}
			onChange={inputHandler}
			placeholder="Enter city name"
		/>
	)
}

export default Input;