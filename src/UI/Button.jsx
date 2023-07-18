import styles from '../scss/Button.module.scss';

const Button = ({children, searchHandler}) => {
	return (
		<button onClick={searchHandler}>{children}</button>
	)
}

export default Button;