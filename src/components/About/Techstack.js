import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejsSmall, DiPython, DiJava, DiCss3, DiHtml5, DiMysql, DiProlog, DiPhp, DiNpm } from "react-icons/di";
import { TbBrandSolidjs } from "react-icons/tb";
import { SiExpress, SiSpring } from "react-icons/si";
function Techstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} className="tech-icons">
				<DiHtml5 />
				<p className="tech-title">HTML</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiCss3 />
				<p className="tech-title">CSS</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiJavascript1 />
				<p className="tech-title">JAVASCRIPT</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiPhp />
				<p className="tech-title">PHP</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiNodejsSmall />
				<p className="tech-title">NODE.JS</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<TbBrandSolidjs />
				<p className="tech-title">SOLID.JS</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiExpress />
				<p className="tech-title">EXPRESS.JS</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiReact />
				<p className="tech-title">REACT.JS</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiPython />
				<p className="tech-title">PYTHON</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiJava />
				<p className="tech-title">JAVA</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiProlog />
				<p className="tech-title">PROLOG</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiMysql />
				<p className="tech-title">MYSQL</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiNpm />
				<p className="tech-title">NPM</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiSpring />
				<p className="tech-title">SPRING BOOT</p>
			</Col>
		</Row>
	);
}

export default Techstack;
