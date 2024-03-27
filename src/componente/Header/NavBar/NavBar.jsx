import AsLi from './AsLi/AsLi';
import styles from './NavBar.module.scss';


const NavBar = ({ }) => {

	return (
		<nav className={styles.navbar}>
			<ul>
				<AsLi nome={'HOME'} to={''}/>
				<AsLi nome={'SOBRE'} to={'sobre'}/>
				<AsLi nome={'PORTFÓLIO'} to={'portfolio'}/>
				<AsLi nome={'DOWLOAD CV'} to={'*'}/>
			</ul>
		</nav>
	);
};


export default NavBar;