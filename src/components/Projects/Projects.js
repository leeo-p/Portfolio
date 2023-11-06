import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Maggle from "../../Assets/Projects/maggle.png";
import Portfolio from "../../Assets/home-main.svg";
import Paularis from "../../Assets/Projects/paularis.png";
import HLD from "../../Assets/Projects/hld.webp";
import BJ from "../../Assets/Projects/bj.png"
import Huffman from "../../Assets/Projects/h.png";
import Feedback from "../../Assets/Projects/clk.png";

function Projects() {
	return (
		<Container fluid className="project-section">
			<Container>
				<h1 className="project-heading">
					My Recent <strong className="blue">Works </strong>
				</h1>
				<p style={{ color: "white" }}>
					Here are a few projects I've worked on recently.
				</p>
				<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
					<Col md={4} className="project-card">
						<ProjectCard
						imgPath={Feedback}
						isBlog={false}
						title="Feeback - Colemak"
						description="Project in JEE. Creation of a website to learn Colemak, a keyboard layout. Using of Spring Boot framework and MVC pattern."
						Link="https://github.com/loouis-t/Feedback-Colemak"
						/>
					</Col>
					<Col md={4} className="project-card">
						<ProjectCard
						imgPath={Portfolio}
						isBlog={false}
						title="Portfolio"
						description="Personal Portfolio build with React.js to present who I am and what I do"
						Link="https://github.com/leeo-p/Portfolio"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
						imgPath={Maggle}
						isBlog={false}
						title="Maggle"
						description="End-of-year project ING 1. Creation of a web application to manage Data projects for the association IA Pau."
						Link="https://github.com/eclausse/projet_ing1"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
						imgPath={Paularis}
						isBlog={false}
						title="Paularis"
						description="Member of the BDE Paularis (student association). Organisation of all the school's student events."
						Link="https://paularis.fr/"              
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
						imgPath={HLD}
						isBlog={false}
						title="HomeLuxeDesign"
						description="Web development project. Design of a sales site containing a detailed presentation of items, a shopping basket and a login module."
						Link="https://github.com/leeo-p/HomeLuxeDesign"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
						imgPath={BJ}
						isBlog={false}
						title="BlackJack"
						description="C project : game of BlackJack in C, user VS dealer (represented by the computer)"
						Link="https://github.com/leeo-p/BlackJack"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
						imgPath={Huffman}
						isBlog={false}
						title="Huffman"
						description="C project for compressing and decompressing a text file using the Huffman method"
						Link="https://github.com/leeo-p/Huffman"
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
