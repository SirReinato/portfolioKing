import { useContext } from 'react';
import BtnsNoModal from './BtnsNoModal/BtnsNoModal';
import styles from './ModalPortfolio.module.scss';
import Modal from 'react-modal';
import { DescricaoModalContext } from '../../context/DescricaoModalContext';

const ModalPortfolio = ({isOpen, fecharModal}) => {
	const {dadosModal} = useContext(DescricaoModalContext)
	console.log(dadosModal);
	return (
		<Modal 
			isOpen={isOpen}
			style={{
				overlay: {
				  backgroundColor: 'rgba(0, 0, 0, 0.40)',
				}
			}}
			className={styles.modalportfolio}
		>
			<div className={styles.conteinerModal}>

				<button className={styles.btnFechar} onClick={fecharModal}>
					<img src="/fechar.png" alt="icone de fechar" />
				</button>
				<img
					className={styles.fotoSite}
					src={dadosModal.path}
					alt={dadosModal.nome}
					sizes="(max-width: 660px)"
					srcSet={`${dadosModal.path} 660w, ${dadosModal.path} 800w`}
				/>
				<h2 className={styles.seuNome}>{dadosModal.nome}</h2>

				<p className={styles.descricao}>{dadosModal.descricao}</p>

				<div className={styles.btnFooter}>
					<BtnsNoModal nome={'Repositório'} to={'https://github.com/SirReinato'} />
					<BtnsNoModal nome={'Visitar'} to={dadosModal.url} />
				</div>
			</div>

		</Modal>
	);
};


export default ModalPortfolio;