import { Link } from 'react-router-dom';
import styles from './Contatos.module.scss';

const Contatos = ({ }) => {
	return (
		<ul className={styles.contatos}>
			<li className={styles.lista}>
				<Link to={'https://github.com/SirReinato'}>
					<img src="/public/contato/github.png" alt="logo github" />
				</Link>
			</li>
			<li className={styles.lista}>
				<Link to={'https://www.linkedin.com/in/renato-fran%C3%A7a-0014b3195/'}>
					<img src="/public/contato/linkedin.png" alt="logo linkedin" />
				</Link>
			</li>
			<li className={styles.lista}>
				<Link to={''}>
					<img src="/public/contato/email.png" alt="logo email" />
				</Link>
			</li>
		</ul>
	);
};


export default Contatos;