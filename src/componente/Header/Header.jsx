import Banner from '../Banner/Banner';
import styles from './Header.module.scss';
import NavBar from './NavBar/NavBar';

const Header = ({}) => {
	return (
		<div className={styles.header}>
 			<NavBar/>
			<Banner 
				foto={'/MyFace.png'}
			/>
 		</div>
	);
};


export default Header;