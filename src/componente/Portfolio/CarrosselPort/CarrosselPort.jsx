import React, { useState } from "react";
import Slider from "react-slick";
import styles from "./CarrosselPort.module.scss";
import dadosPortfolio from "../../../json/portfolio.json";
import CardPortfolio from "../CardPortfolio/CardPortfolio";
import ModalPortfolio from "../../ModalPortfolio/ModalPortfolio";

const CarrosselPort = ({ }) => {
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

	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => setIsOpen(true);
	const handleClose = () => setIsOpen(false);
  


	return (
		<div className={styles.sliderContainer}>
			<Slider {...settings}>
				{dadosPortfolio.map(dados =>{
					return(
						<CardPortfolio {...dados} hadleClick={handleOpen} key={dados.nome}/>
					)
				})}
			</Slider>
			<ModalPortfolio {...dadosPortfolio} isOpen={isOpen} onClose={handleClose}/>
		</div>
	);
};


export default CarrosselPort;