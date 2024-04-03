import styles from './CardHabilidades.module.scss';

const CardHabilidades = ({nome}) => {
	return (
		<h3 className={styles.cardhabilidades}>
			{nome}
 		</h3>
	);
};


export default CardHabilidades;