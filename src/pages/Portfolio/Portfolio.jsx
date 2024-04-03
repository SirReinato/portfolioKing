import CarrosselPort from '../../componente/Portfolio/CarrosselPort/CarrosselPort';
import styles from './Portfolio.module.scss';
import ModalPortfolio from "../../componente/ModalPortfolio/ModalPortfolio"
import { useState } from 'react';

const Portfolio = ({ }) => {
	const elementoRaiz = document.getElementById('root');

	const [isOpen, setIsOpen] = useState(false);

	function abrirModal() {
		setIsOpen(true);
	}

	function fecharModal() {
		setIsOpen(false);
	}


	return (

		<section className={styles.portfolioConteiner}>
			<div className={styles.portfolio}>
				<h3 className={styles.portTitle}>Portfólio</h3>
				<div className={styles.portBanner}>
					<CarrosselPort onClick={abrirModal} />
				</div>
			</div>
			<ModalPortfolio
				appElement={elementoRaiz}
				fecharModal={fecharModal}
				isOpen={isOpen}
			/>
		</section>
	);
};


export default Portfolio;