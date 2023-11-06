import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiIntellijidea } from "react-icons/si";
import { AiFillGithub, AiFillGitlab } from "react-icons/ai";
import { DiEclipse, DiUbuntu } from "react-icons/di";
import { FaFigma } from "react-icons/fa";

function Toolstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} className="tech-icons">
				<SiVisualstudiocode />
				<p className="tech-title">VS CODE</p>

			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<AiFillGithub />
				<p className="tech-title">GITHUB</p>

			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<AiFillGitlab />
				<p className="tech-title">GITLAB</p>

			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiEclipse />
				<p className="tech-title">ECLIPSE</p>

			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiUbuntu />
				<p className="tech-title">UBUNTU</p>

			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<FaFigma />
				<p className="tech-title">FIGMA</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiIntellijidea />
				<p className="tech-title">INTELLIJ IDEA</p>
			</Col>
		</Row>
	);
}

export default Toolstack;
