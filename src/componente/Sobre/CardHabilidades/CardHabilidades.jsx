import styles from './CardHabilidades.module.scss';

const CardHabilidades = ({path, nome}) => {
	return (
		<figure className={styles.cardhabilidades}>
 			<img className={styles.logoHabilidade} src={path} alt={nome} />
 		</figure>
	);
};


export default CardHabilidades;