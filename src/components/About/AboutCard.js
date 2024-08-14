import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
	return (
		<Card className="quote-card-view">
			<Card.Body>
				<blockquote className="blockquote mb-0">
					<p className="text-about" style={{ textAlign: "justify", color: "#fff" }}>
						Hi everyone, my name is <span className="blue">Léo Portet </span>
						I'm <span className="blue">21</span>, I'm from <span className="blue">Toulouse</span> and I'm currently studying in <span className="blue">Pau, France</span>.
						<br />
						<br />
						I'm in my second year of engineering studies, specialising in
						<br />
						<span className="blue">Information Systems Engineering</span> at <span className="blue">CY-Tech</span> Pau.
						<br />
						<br />
						Excepted coding, here are a few activities that I like to do !
					</p>
					<ul style={{ textAlign: "justify", color: "#fff" }}>
						<li className="about-activity">
							- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Playing Video Games
						</li>
						<li className="about-activity">
							- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Playing Sport, especially handball
						</li>
						<li className="about-activity">
							- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Going out with my friends
						</li>
					</ul>
				</blockquote>
			</Card.Body>
		</Card>
	);
}

export default AboutCard;
