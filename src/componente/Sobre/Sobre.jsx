import styles from './Sobre.module.scss';
import habilidades from '../../json/habilidades.json';
import CardHabilidades from './CardHabilidades/CardHabilidades';


const Sobre = ({ }) => {
	console.log(habilidades);
	return (
		<section className={styles.sobre}>
			<div className={styles.sobreText}>
				<h2 className={styles.titulosobre}>Sobre mim</h2>
				<p className={styles.textSobre}>
					Olá, me chamo <span className={styles.textSobreDestaque}>Renato</span>, sou um Desenvolvedor Frontend que se dedica a criar soluções web incríveis, responsivas e inovadoras.  Sou formado em Análise e Desenvolvimento de Sistemas pela Universidade Católica de Brasília (UCB),
					onde aprendi os fundamentos da programação e do desenvolvimento web. Tenho experiência em HTML, CSS, JavaScript e React.js, que são as principais tecnologias que uso para desenvolver interfaces web modernas e atrativas. No momento, estou focado em explorar as possibilidades do React.js, pois acredito que é um framework poderoso e versátil para o desenvolvimento web. Estou sempre em busca de novos desafios e oportunidades de aprendizado, pois acredito que o desenvolvimento web é uma área em constante evolução.
				</p>
			</div>
			<div className={styles.habilidades}>
				{habilidades.map(dados =>{
					return(
						<CardHabilidades {...dados} key={dados.nome}/>
					)
				})}
			</div>
		</section>
	);
};


export default Sobre;