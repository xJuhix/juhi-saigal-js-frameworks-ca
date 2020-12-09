import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { BASE_URL } from "../../constants/api";

function GameDetail() {
	const [gameDetail, setGame] = useState(null);
	

	let { id } = useParams();

	const url = BASE_URL + id;

	useEffect(() => {
		fetch(url)
			.then(response => response.json())
            .then(json => {
                setGame(json)
                console.log (json);
            })
            .catch(error => console.log(error));

	}, [url]);

	return (
		<Row>
			<Col md={6} className="GameDetail-image">
				<Image src={gameDetail.background_image} rounded />
			</Col>
			<Col>
				<h1>{gameDetail.name}</h1>
				<p>
					<b>Rating:</b> {gameDetail.rating}
				</p>
				<p>
					<b>Release date:</b> {gameDetail.released}
				</p>
				<p>
					<b>Description:</b> {gameDetail.description_raw}
				</p>
                <p>
                   <b>Visit the game page:</b> <a target='_blank' href={gameDetail.website}>Visit Game</a>
                </p>
				
				
			</Col>
		</Row>
	);
}

export default GameDetail;