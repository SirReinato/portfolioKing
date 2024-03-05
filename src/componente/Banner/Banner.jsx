import styles from './Banner.module.scss';

const Banner = ({ foto }) => {
	return (
		<div className={styles.banner}>
			<h3 className={styles.textinho}>
				Olá, sou  um <span className={styles.marcaTexto}> Desenvolvedor Frontend </span>  apaixonado por criar experiências digitais incríveis, meu objetivo é transformar ideias em realidade, utilizando as melhores práticas de design e código.
			</h3>
			<img className={styles.perfil} src={foto} alt={'foto do meu perfil'} />
		</div>
	);
};


export default Banner;