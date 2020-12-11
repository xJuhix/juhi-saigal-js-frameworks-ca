import React from "react";
import Heading from "../layout/Heading";
import GameList from "../game/GameList";

export function Home() {
	return (
		<>
			<Heading title="RAWG Viedo Games" />
			<GameList />
		</>
	);
}

export default Home;
