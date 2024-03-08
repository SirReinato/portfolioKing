import CarrosselPort from './CarrosselPort/CarrosselPort';
import styles from './Portfolio.module.scss';

const Portfolio = ({ }) => {

	return (
		<section className={styles.portfolio}>
			<h3 className={styles.portTitle}>Portfólio</h3>
			<div className={styles.portBanner}>
				<CarrosselPort />
			</div>
		</section>
	);
};


export default Portfolio;