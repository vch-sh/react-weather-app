import styles from '../scss/Input.module.scss';

const Input = ({ text, inputHandler }) => {
	
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