import React from "react";
import "./SideContent.css";

const SideContent: React.FC = () => {
	return (
		<div className="wrapper">
			<div className="sideCard">
				<div className="sideHeader">
					<div className="leftSideWrapper">
						<img className="sideUserImage" src="https://source.unsplash.com/random/100x100?woman&orientation=portrait?0" alt="" />
						<div className="sideUserInfo">
							<p className="sideUserName">{'Ayşe Palandöken'}</p>
						</div>
					</div>
				</div>
				<img src="https://source.unsplash.com/random/672x360?hiking&0" alt="Posted Content" className="imageContent"/>
				<div className="sideContent">Normal healthy 21 y/o patient came in presenting odd symptoms. Patient described a new set of symptoms they all get well after seeing the doctor.</div>
				<div className="sideDetail">
               <p>2<span className="sideLabel"> Likes</span></p>
               <p>4<span className="sideLabel"> Comments</span></p>
            </div>
			</div>
		</div>
	);
};

export default SideContent;
