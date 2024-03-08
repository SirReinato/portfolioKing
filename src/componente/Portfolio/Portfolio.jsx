import styles from './Portfolio.module.scss';
import Slider from "react-slick";

const Portfolio = ({ }) => {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 2000,
		cssEase: "linear"
	};

	return (
		<section className={styles.portfolio}>
			<h3 className={styles.portTitle}>Portfólio</h3>
			<div className={styles.portBanner}>
				<div className="slider-container">
					<Slider {...settings}>
						<div>
							<h3>1</h3>
						</div>
						<div>
							<h3>2</h3>
						</div>
						<div>
							<h3>3</h3>
						</div>
						<div>
							<h3>4</h3>
						</div>
						<div>
							<h3>5</h3>
						</div>
						<div>
							<h3>6</h3>
						</div>
					</Slider>
				</div>
			</div>
		</section>
	);
};


export default Portfolio;