import styles from './Sobre.module.scss';

const Sobre = ({ }) => {
	return (
		<section className={styles.sobre}>
			<div className={styles.sobremin}>
				<h1>Sobre mim</h1>
				<p>Olá, me chamo Renato, sou um Desenvolvedor Front-end que se dedica a criar soluções web incríveis, responsivas e inovadoras.  Sou formado em Análise e Desenvolvimento de Sistemas pela Universidade Católica de Brasília (UCB), Ao longo da minha formação, participei de diversos cursos e projetos práticos, sempre buscando aprimorar minhas habilidades.
				Tenho experiência em JavaScript, React.js, Node.js, Next.js, Scss, Figma, Bootstrap e Tailwind, que são as principais tecnologias que uso para desenvolver interfaces web modernas e atrativas. No momento, Estou em transição de carreira e altamente motivado para encontrar uma oportunidade em uma empresa que valorize o aprendizado contínuo e a colaboração. Sou um profissional proativo, dedicado e com grande capacidade de adaptação.</p>
			</div>
			
		</section>
	);
};


export default Sobre;