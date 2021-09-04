import React from "react";

//include images into your bundle

import { Jumbotron } from "./jumbotron";
import { Navbar } from "./navbar";
import { Cards } from "./cards";

//create your first component
const Home = () => {
	return (
		<>
			<div>
				<Navbar />
			</div>

			<div className="container">
				<Jumbotron />
				<div className="row">
					<div className="col-sm">
						<Cards />
					</div>
					<div className="col-sm">
						<Cards />
					</div>
					<div className="col-sm">
						<Cards />
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
