import styles from './CardPortfolio.module.scss';

const CardPortfolio = ({path, nome, subtitulo}) => {
	return (
		<figure className={styles.cardportfolio}>
 			<img className={styles.imgCard} src={path} alt={nome} />
			<figcaption className={styles.cardTextos}>
				<h3 className={styles.tituloCard}>{nome}</h3>
				<p className={styles.subCard}>{subtitulo}</p>
			</figcaption>
 		</figure>
	);
};


export default CardPortfolio;