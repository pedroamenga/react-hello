import React from "react";

//include images into your bundle

import { Jumbotron } from "./jumbotron";
import { Navbar } from "./navbar";
import { Cards } from ".cards";

//create your first component
const Home = () => {

	};
	return (
		<>
			<div>
				<Navbar titulo="Mi NavBar" />
			</div>
			<div className="container-fluid">
				<div className="JT">
					<Jumbotron />
				</div>
				<div className="cards">
					<Cards titulo="titulo1"/>

				</div>
			</div>
		</>
	);
};

export default Home;
