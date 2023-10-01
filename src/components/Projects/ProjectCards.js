import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCards(props) {
	return (
		<Card className="project-card-view">
			<Card.Img variant="top" src={props.imgPath} alt="card-img" className="card-img" />
			<Card.Body>
				<Card.Title>{props.title}</Card.Title>
				<Card.Text style={{ textAlign: "justify" }}>
					{props.description}
				</Card.Text>
				<Button className="button-link" variant="primary" href={props.Link} target="_blank">
					{props.isBlog ? "Blog" : "Link"}
				</Button>
				{"\n"}
				{"\n"}
			</Card.Body>
		</Card>
	);
}
export default ProjectCards;
