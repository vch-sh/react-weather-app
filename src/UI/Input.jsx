import styles from '../scss/Input.module.scss';

const Input = ({ text, inputHandler }) => {
	
	return (
		<input 
			type="text"
			value={text}
			onChange={inputHandler}
		/>
	)
}

export default Input;