import React from "react";
import Feeds from "../components/Feeds/Feeds";
import Navbar from "../components/Navbar";
import "./Home.css";

const Home: React.FC = () => {
	return (
		<div className="homeWrapper">
			<Navbar />
			<Feeds />
		</div>
	);
};

export default Home;
