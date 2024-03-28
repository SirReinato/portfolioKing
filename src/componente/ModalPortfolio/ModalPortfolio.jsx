import BtnsNoModal from './BtnsNoModal/BtnsNoModal';
import styles from './ModalPortfolio.module.scss';

const ModalPortfolio = ({ isOpen, onClose, nome, path, url, descricao }) => {
	return (
		<dialog open={isOpen} className={styles.modalportfolio}>
			<button className={styles.btnFechar} onClick={onClose}>
				<img src="/fechar.png" alt="icone de fechar"  />
			</button>
			<img 
				src={path} 
				alt={nome} 
				sizes="(max-width: 660px)" 
				srcset={`${path} 660w, ${path} 800w`} 
			/>

			<h2 className={styles.seuNome}>{nome}</h2>

			<p className={styles.descricao}>{descricao}</p>

			<BtnsNoModal nome={'Repositório'} to={'https://github.com/SirReinato'}/>
			<BtnsNoModal nome={'Visitar'} to={url}/>

		</dialog>
	);
};


export default ModalPortfolio;