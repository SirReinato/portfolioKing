import styles from './CardPortfolio.module.scss';

const CardPortfolio = ({path, nome, subtitulo, url, descricao, hadleClick}) => {
	function pegarDadosEabrirModal(nome, path, url, descricao, hadleClick) {
		const dados = {
			nome: nome,
			path: path,
			url: url,
			descricao: descricao
		}
		hadleClick = true;

		return dados, hadleClick
	}
	return (
		<figure 
			onClick={pegarDadosEabrirModal(path, nome, subtitulo, url, descricao, hadleClick)} 
			className={styles.cardportfolio}>
 			<img className={styles.imgCard} src={path} alt={nome} />
			<figcaption  className={styles.cardTextos}>
				<h3 className={styles.tituloCard}>{nome}</h3>
				<p className={styles.subCard}>{subtitulo}</p>
			</figcaption>
 		</figure>
	);
};


export default CardPortfolio;