import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/api";
import GameSearch from "./GameSearch";
import GameItem from "./GameItem";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function Home() {
    const [games, setGames] = useState([]);
    const [filtredGames, setFilteredGames] = useState([]);

    // Getting the games from API
    useEffect(() => {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(json => {
                setGames(json.results)
                setFilteredGames(json.results)
            })
            .catch(error => console.log(error));
    }, [])

    const searchGames = function (event) {
        console.log(event.target.value)
        const searchText = event.target.value.toLowerCase();
        const filteredArray = games.filter(game => {
            return game.name.toLowerCase().includes(searchText)
        })
        setFilteredGames(filteredArray);
    }

    return (
        <>
            <GameSearch handleSearch={searchGames} />
            <Row>
                {filtredGames.map(game => (
                    <Col sm={6} md={3} key={game.id}>
                        <GameItem id={game.id} name={game.name} background_image={game.background_image} rating={game.rating} released={game.released} />
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default Home;