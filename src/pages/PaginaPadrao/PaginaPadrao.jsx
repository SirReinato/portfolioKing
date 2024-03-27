import { Outlet } from 'react-router-dom';
import styles from './PaginaPadrao.module.scss';
import Logo from '../../componente/Logo/Logo';
import Contatos from '../../componente/Contatos/Contatos';

const PaginaPadrao = ({ }) => {
	return (
		<section className={styles.paginapadrao}>
			<header>
				<nav>testefasdfasdfasdfsadfsdfsassssssssssssssssss teste </nav>
			</header>
			<main>
				<div className={styles.divBefore}></div>
				<Logo/>
				<Outlet/>
				<Contatos/>
				<div className={styles.divAfter}></div>

			</main>
			<footer>
				<p>teste teste </p>

			</footer>
		</section>
	);
};


export default PaginaPadrao;