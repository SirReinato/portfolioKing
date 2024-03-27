import styles from './Logo.module.scss';

const Logo = ({ }) => {
	return (
		<img 
			className={styles.logo}
			srcSet="/logoMobile.png 660w, /logoDesktop.png 800w"
			sizes="(max-width: 660px)"
			src="/logo.png"
			alt="um homem contando moedas" />
	);
};


export default Logo;