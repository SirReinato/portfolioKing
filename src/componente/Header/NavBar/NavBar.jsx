import styles from './NavBar.module.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const NavBar = ({ }) => {

	return (
		<Navbar expand="lg" className={` ${styles.navbar}`} data-bs-theme="light">
			<Container>

				<Navbar.Brand href="#home">
					<img src="/myLogo.png" alt="logo do site, renato frança escrito em branco e 3 listra na diagonal" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="offcanvasNavbar" className={styles.menuHamburguer}>
					<img src="/menuHamburguer.png" alt="3 barras azuis em forma de coluna, simulando um hamburguer" />
				</Navbar.Toggle>

				<Navbar.Offcanvas
					id={`offcanvasNavbar`}
					aria-labelledby={`offcanvasNavbarLabel`}
					placement="end"
					data-bs-theme="dark"
				>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title id={`offcanvasNavbarLabel`}>
							Menu
						</Offcanvas.Title>
					</Offcanvas.Header>

					<Offcanvas.Body>
						<Nav className="justify-content-end flex-grow-1 pe-3">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#link">Sobre</Nav.Link>
							<Nav.Link href="#link">Portfólio</Nav.Link>
							<Nav.Link href="#link">Contato</Nav.Link>
							<Nav.Link href="#link">Download CV</Nav.Link>
						</Nav>

					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	);
};


export default NavBar;