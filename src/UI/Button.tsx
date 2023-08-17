import React from 'react';
import { ButtonProps } from '../types';
import styles from '../scss/Button.module.scss';

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