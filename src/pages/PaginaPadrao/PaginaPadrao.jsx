import { Outlet } from 'react-router-dom';
import styles from './PaginaPadrao.module.scss';
import Logo from '../../componente/Logo/Logo';
import Contatos from '../../componente/Contatos/Contatos';
import Header from '../../componente/Header/Header';

const PaginaPadrao = ({ }) => {
	return (
		<section className={styles.paginapadrao}>
			<header>
				<Header/>
			</header>
			<main>
				<div className={styles.divBefore}></div>

				<Logo />
				<Outlet />
				<Contatos />

				<div className={styles.divAfter}></div>
			</main>
			<footer>
				<p>teste teste </p>

			</footer>
		</section>
	);
};


export default PaginaPadrao;