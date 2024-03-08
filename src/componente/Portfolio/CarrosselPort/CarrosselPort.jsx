import React from "react";
import Slider from "react-slick";
import styles from "./CarrosselPort.module.scss";
import dadosPortfolio from "../../../json/portfolio.json";
import CardPortfolio from "../CardPortfolio/CardPortfolio";

const CarrosselPort = ({ }) => {
	const settings = {
		dots: true,
		infinite: true,
		adaptativeHeight: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 2000
	};

	return (
		<div className={styles.sliderContainer}>
			<Slider {...settings}>
				{dadosPortfolio.map(dados =>{
					return(
						<CardPortfolio {...dados} key={dados.nome}/>
					)
				})}
			</Slider>
		</div>
	);
};


export default CarrosselPort;