import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Jumbotron } from "./jumbotron";
import { Navbar } from "./navbar";
import { Cards } from "./cards";

//create your first component
const Home = () => {
	let variacioncartas = {
		var1: "variacion1",
		var2: "variacion2",
		var3: "variacion3"
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
					<Cards />
				</div>
			</div>
		</>
	);
};

export default Home;
