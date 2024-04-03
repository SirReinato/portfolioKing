import AsLi from './AsLi/AsLi';
import styles from './NavBar.module.scss';


const NavBar = ({ }) => {

	return (
		<nav className={styles.navbar}>
			<ul>
				<AsLi nome={'HOME'} to={''}/>
				<AsLi nome={'SOBRE'} to={'sobre'}/>
				<AsLi nome={'PORTFÓLIO'} to={'portfolio'}/>
				<a className={styles.ancora} href="https://drive.google.com/file/d/1X0SquVojfTu_a_7qAs5TLAux4YUk9jmt/view?usp=sharing" download="cb-renato-franca.pdf" target='_blank'>DOWLOAD CV</a>

			</ul>
		</nav>
	);
};


export default NavBar;