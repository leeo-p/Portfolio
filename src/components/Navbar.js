import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {
	AiOutlineHome,
	AiOutlineFundProjectionScreen,
	AiOutlineUser,
} from "react-icons/ai";
import Button from "react-bootstrap/Button";
import pdf from "../Assets/CV Léo Portet.pdf";
import { Row } from "react-bootstrap";

function NavBar() {
	const [expand, updateExpanded] = useState(false);
	const [navColour, updateNavbar] = useState(false);

	function scrollHandler() {
		if (window.scrollY >= 18) {
		updateNavbar(true);
		} else {
		updateNavbar(false);
		}
	}

	window.addEventListener("scroll", scrollHandler);

	return (
		<Navbar expanded={expand} fixed="top" expand="md" className={navColour ? "sticky" : "navbar"}>
			<Container className="nav-container">
				<Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => { 	updateExpanded(expand ? false : "expanded"); }} className="navbar-toggler"/>
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ms-auto" defaultActiveKey="#home">
						<Nav.Item>
							<Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)} style={{ color: "#ffffff"}}>
								<AiOutlineHome style={{ marginBottom: "2px", color: "#ffffff" }} /> Home
							</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)} style={{ color: "#ffffff"}}>
								<AiOutlineUser style={{ marginBottom: "2px", color: "#ffffff" }} /> About
							</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)} style={{ color: "#ffffff"}}>
								<AiOutlineFundProjectionScreen
								style={{ marginBottom: "2px", color: "#ffffff" }} />{" "}
								Projects
							</Nav.Link>
						</Nav.Item>

							<Row style={{ justifyContent: "center", position: "relative" }}>
								<Button className="download-button" variant="primary" href={pdf} target="_blank" style={{ maxWidth: "150px" }}>
									CV
								</Button>
							</Row>

					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
