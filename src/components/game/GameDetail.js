import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { BASE_URL } from "../../constants/api";

function GameInfo() {
	const [game, setGame] = useState([]);    

    let { id } = useParams();

	const url = BASE_URL + "/" + id;

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
			<Col md={6} className="gameDetail-image">
				<Image src={game.background_image} width="500" rounded />
			</Col>
			<Col>
				<h1>{game.name}</h1>
				<p>
					<b>Description:</b>  
				</p>
				<p class="gameDescription">
					{game.description_raw}
				</p>
                <p>
                   <b>Visit the game page:</b> <a  href={game.website}>Visit Game</a>
                </p>
				
				
			</Col>
		</Row>
	);
}

export default GameInfo;