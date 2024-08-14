import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import myImg from "../../Assets/moi.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/CV Léo Portet.pdf";

const Home = () => {
	return (
		<section className="home-container">
			<Container fluid className="home-section" id="home">
				<Container className="home-content">
					<Row>
						<Col md={5} style={{ marginTop: 30 }}>
							<img
								src={homeLogo}
								alt="home pic"
								className="img-fluid"
								style={{ maxHeight: "450px" }}
							/>
						</Col>
						<Col md={7} className="home-header">
							<h1 style={{ paddingBottom: 15 }} className="heading">
								HI !
							</h1>

							<h1 className="heading-name">
								I'M
								<strong className="main-name"> LÉO PORTET</strong>
							</h1>

							<div style={{ textAlign: "left" }}>
								<Typewriter
									className="text-typing"
									options={{
										strings: [
											"Engineering student at CY Tech PAU Cybersecurity speciality work-and-study program in SCC France.",
										],
										autoStart: true,
										delay: 40,
										loop: true,
										deleteSpeed: 30,
									}}
								/>
							</div>
						</Col>
					</Row>
				</Container>
			</Container>
			<Container fluid className="home-about-section" id="about">
				<Container className="home-about-container">
					<Row className="container-about">
						<Col md={8} className="home-about-description">
							<h1 style={{ fontSize: "2.6em" }}>
								LET ME <span className="blue"> INTRODUCE </span> MYSELF
							</h1>
							<br />
							<br />
							<p className="home-about-body">
								During my school career, I discovered web development,
								which I immediately loved,
								<br />
								<b className="blue"> especially the Front End development (GUI + Design). </b>
								<br />
								<br />
								I deepened my skills by introducing frameworks into my projects, which enabled me to create
								<b className="blue"> my own personal portfolio. </b>
								<br />
								<br />
								Here is the result of this <b className="blue">new passion</b>.
								<br />
								<br />
								I hope you enjoy my work and I'll let you discover <b className="blue">who I am</b>.
							</p>
							<br />
							<br />
							<Row style={{ justifyContent: "center", position: "relative" }}>
								<Button
									className="download-button"
									variant="primary"
									href={pdf}
									target="_blank"
									style={{ maxWidth: "150px" }}
								>
									CV
								</Button>
							</Row>
						</Col>

						<Col md={4} className="myAvtar">
							<Tilt>
								<img src={myImg} className="img-fluid" alt="avatar" />
							</Tilt>
						</Col>
					</Row>
					<Row>
						<Col md={12} className="home-about-social">
							<h1>FIND ME ON</h1>
							<ul className="home-about-social-links">
								<li className="social-icons">
									<a
										href="https://github.com/leeo-p"
										target="_blank"
										rel="noreferrer"
										className="icon-colour  home-social-icons"
									>
										<AiFillGithub />
									</a>
								</li>
								<li className="social-icons">
									<a
										href="https://www.linkedin.com/in/léo-portet-4072a9297/"
										target="_blank"
										rel="noreferrer"
										className="icon-colour  home-social-icons"
									>
										<FaLinkedinIn />
									</a>
								</li>
							</ul>
						</Col>
					</Row>
					<br />
				</Container>
			</Container>
		</section>
	);
};

export default Home;
