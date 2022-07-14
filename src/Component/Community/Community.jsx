import React from "react";
import "./Community.css";
import MidCommunity from "./MidCommunity";
import LeftCommunity from "./LeftCommunity";
import LeftConnector from "./LeftConnector";
import RightUpperCommunity from "./RightUpperCommunity";
import RightCommunity from "./RightCommunity";
import RightConnector from "./RightConnector";
import RightDownConnector from "./RightDownConnector";
import Img1 from "./../../asset/images/React-Best-Practices-and-Security.jpg"
function Community() {
    return (
        <section id="community">
            <div className="text-center">
                <br /><br /><br /><br />
                <h1>Community For React</h1>
                <br /><br />
                <div className="card border-0 shadow-lg">
                    <div className="container">
                        <br /><br />
                        <img src={Img1} alt="" className="community-img" />
                        <br /><br /><br />
                        <br />
                        <div className="community-container">
                            <LeftCommunity />
                            <MidCommunity />
                            <LeftConnector />
                            <RightUpperCommunity />
                            <RightCommunity />
                            <RightConnector />
                            <RightDownConnector />
                        </div>
                        <br />
                        <h1 className="text-decoration-none">React Community</h1>
                        <br /><br />
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Community;