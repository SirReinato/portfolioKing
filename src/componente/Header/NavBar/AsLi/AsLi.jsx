import { NavLink } from 'react-router-dom';
import styles from './AsLi.module.scss';

const AsLi = ({ to, nome }) => {
	return (
		<NavLink 
			to={`/${to}`}
			className={({isActive}) => `
				${isActive ? styles.destaque : ""}
			`}
		
		>
			<li className={styles.asli}>
				{nome}
			</li>
		</NavLink>
	);
};


export default AsLi;