import styles from './Header.module.scss';
import NavBar from './NavBar/NavBar';

const Header = ({}) => {
	return (
		<div className={styles.header}>
			<NavBar/>
			<img className={styles.duasBarraHeader} src="/header/duasBarras.png" alt="duasBarras" />
 		</div>
	);
};


export default Header;