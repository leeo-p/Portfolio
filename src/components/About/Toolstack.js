import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiIntellijidea, SiKalilinux, SiVmware } from "react-icons/si";
import { AiFillGithub, AiFillGitlab } from "react-icons/ai";
import { DiEclipse, DiUbuntu } from "react-icons/di";
import { FaFigma, FaRedhat } from "react-icons/fa";
import wazuh from "./wazuh.png";
import ciso from "./ciso.png";
import iris from "./iris.png";
import shuffle from "./shuffle.png"

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

			<Col xs={4} md={2} className="tech-icons">
				<FaRedhat />
				<p className="tech-title">ROCKY LINUX</p>
			</Col>

			<Col xs={4} md={2} className="tech-icons">
				<SiKalilinux />
				<p className="tech-title">KALI LINUX</p>
			</Col>

			<Col xs={4} md={2} className="tech-icons">
				<img src={wazuh} alt="wazuh" className="tech-icon" width="72px" height="72px" />
				<p className="tech-title">WAZUH</p>
			</Col>

			<Col xs={4} md={2} className="tech-icons">
				<img src={iris} alt="iris" className="tech-icon" width="72px" height="72px" />
				<p className="tech-title">DFIR-IRIS WEB</p>
			</Col>

			<Col xs={4} md={2} className="tech-icons">
				<img src={shuffle} alt="shuffle" className="tech-icon" width="130px" height="92px" />
				<p className="tech-title">SHUFFLE SOAR</p>
			</Col>

			<Col xs={4} md={2} className="tech-icons">
				<img src={ciso} alt="ciso" className="tech-icon" width="130px" height="75px" />
				<p className="tech-title">CISO ASSISTANT</p>
			</Col>

			<Col xs={4} md={2} className="tech-icons">
				<SiVmware />
				<p className="tech-title">V SPHERE</p>
			</Col>
		</Row>
	);
}

export default Toolstack;
