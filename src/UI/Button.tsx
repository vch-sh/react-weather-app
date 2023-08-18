import React from 'react';
import styles from '../scss/Button.module.scss';

interface ButtonProps {
	children: React.ReactNode,
	clickHandler: React.MouseEventHandler<HTMLButtonElement>,
}

const Button = ({ children, clickHandler }: ButtonProps) => {
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