import { Link } from 'react-router-dom';
import styles from './BtnsNoModal.module.scss';

const BtnsNoModal = ({ nome, to }) => {
	return (
		<Link to={to} target='_blank'>
			<button className={styles.btnsnomodal}>
				{nome}
			</button>
		</Link>
	);
};


export default BtnsNoModal;