import { useContext } from 'react';
import { DescricaoModalContext } from '../../../context/DescricaoModalContext';
import styles from './CardPortfolio.module.scss';

const CardPortfolio = ({ path, nome, subtitulo, descricao, url, onClick }) => {
	const {setDadosModal} = useContext(DescricaoModalContext)

	return (
		<div onClick={()=> setDadosModal({path, nome, subtitulo, descricao, url})}>
			<figure
				onClick={onClick}
				className={styles.cardportfolio}
			>
				<img className={styles.imgCard} src={path} alt={nome} />
				<figcaption className={styles.cardTextos}>
					<h3 className={styles.tituloCard}>{nome}</h3>
					<p className={styles.subCard}>{subtitulo}</p>
				</figcaption>

			</figure>

		</div>
	);
};


export default CardPortfolio;