import styles from './Home.module.scss';

const Home = ({ }) => {
	return (
		<section className={styles.home}>
			<h2 className={styles.banner}>
				Olá, sou  um <strong>Desenvolvedor Front-end</strong> apaixonado por criar experiências digitais incríveis, meu objetivo é transformar ideias em realidade, utilizando as melhores práticas de design e código.
			</h2>
			<img src="/minhaCara.png" alt="minha carocha" className={styles.myFace} />
		</section>
	);
};

export default Home;