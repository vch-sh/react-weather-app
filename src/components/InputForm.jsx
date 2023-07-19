import Button from '../UI/Button';
import Input from '../UI/Input';
import {ReactComponent as Loading} from '../assets/loading.svg';
import styles from '../scss/InputForm.module.scss';

const InputForm = ({ text, inputHandler, searchHandler, clickHandler, isLoading }) => {

	return (
		<form 
			className={styles.inputForm}
			onChange={searchHandler}
		>

			<Input 
				text={text}
				inputHandler={inputHandler}
			/>
			{isLoading && <Loading className={styles.loader} />}
			

			<Button 
				clickHandler={clickHandler}
			>
				Search
			</Button>

		</form>
	)
}

export default InputForm;