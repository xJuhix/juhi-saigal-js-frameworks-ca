import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function GameItem({ name, background_image, rating, released, id }) {
	return (
		<Card>
			<Card.Img variant="top" src={background_image} />
			<Card.Body>
				<Card.Title>{name}</Card.Title>
                <Card.Text> Rating: {rating} </Card.Text>
                <Card.Text> Released: {released} </Card.Text>
				<Link to={"game/" + id}>
					<Button variant="secondary" block>
						Game Details
					</Button>
				</Link>
			</Card.Body>
		</Card>
	);
}

GameItem.propTypes = {
    name: PropTypes.string.isRequired,
    background_image: PropTypes.string.isRequired,
    released: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
	id: PropTypes.number.isRequired
	
};

export default GameItem;