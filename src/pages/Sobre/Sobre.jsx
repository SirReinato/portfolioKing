import styles from './Sobre.module.scss';
import habilidades from '../../json/habilidades.json';
import CardHabilidades from '../../componente/CardHabilidades/CardHabilidades';

const Sobre = ({ }) => {
	return (
		<section className={styles.sobre}>
			<div className={styles.sobremin}>
				<h1>Sobre mim</h1>
				<p>Olá, me chamo <strong>Renato</strong>, sou um <strong>Desenvolvedor Front-end</strong> que se dedica a criar soluções web incríveis, responsivas e inovadoras.  Sou formado em Análise e Desenvolvimento de Sistemas pela Universidade Católica de Brasília (UCB), Ao longo da minha formação, participei de diversos cursos e projetos práticos, sempre buscando aprimorar minhas habilidades.
					Tenho experiência em JavaScript, React.js, Node.js, Next.js, Scss, Figma, Bootstrap e Tailwind, que são as principais tecnologias que uso para desenvolver interfaces web modernas e atrativas. No momento, Estou em transição de carreira e altamente motivado para encontrar uma oportunidade em uma empresa que valorize o aprendizado contínuo e a colaboração. Sou um profissional proativo, dedicado e com grande capacidade de adaptação.</p>
			</div>
			<div className={styles.habilidade}>
				{habilidades.map(dados => {
					return (
						<CardHabilidades {...dados} key={dados.nome} />
					)
				})}
			</div>
		</section>
	);
};


export default Sobre;