import React from "react";
import Feeds from "../components/Feeds/Feeds";
import Navbar from "../components/Navbar";
import SideContent from "../components/SideContent/SideContent";
import "./Home.css";

const Home: React.FC = () => {
	return (
		<div className="homeWrapper">
			<Navbar />
			<Feeds />
			<SideContent />
		</div>
	);
};

export default Home;
