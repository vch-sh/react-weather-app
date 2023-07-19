import styles from '../scss/Button.module.scss';

const Button = ({ children, clickHandler }) => {
	return (
		<button 
			className={styles.button}
			onClick={clickHandler}
		>
			{children}
		</button>
	)
}

export default Button;