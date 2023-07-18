import styles from '../scss/Button.module.scss';

const Button = ({ children, clickHandler }) => {
	return (
		<button onClick={clickHandler}>{children}</button>
	)
}

export default Button;