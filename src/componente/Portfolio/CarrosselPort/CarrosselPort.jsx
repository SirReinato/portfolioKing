import Slider from "react-slick";
import styles from "./CarrosselPort.module.scss";
import dadosPortfolio from "../../../json/portfolio.json";
import CardPortfolio from "../CardPortfolio/CardPortfolio";

const CarrosselPort = ({ onClick }) => {

	var settings = {
		dots: true,
		infinite: true,
		adaptativeHeight: false,
		slidesToShow: 3,
		slidesToScroll: 2,
		autoplay: true,
		speed: 3000,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 1220,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			}
		]
	};

	return (
		<div className={styles.sliderContainer}>
			<Slider {...settings}>
				{dadosPortfolio.map(dados => {
					return (
						<CardPortfolio
							onClick={onClick}
							{...dados}
							key={dados.nome}
						/>
					)
				})}
			</Slider>
		</div>
	);
};


export default CarrosselPort;