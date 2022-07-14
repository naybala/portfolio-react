import React from "react";
import "./Community.css";
import MidCommunity from "./MidCommunity";
import LeftCommunity from "./LeftCommunity";
import LeftConnector from "./LeftConnector";
import RightUpperCommunity from "./RightUpperCommunity";
import RightCommunity from "./RightCommunity";
import RightConnector from "./RightConnector";
import RightDownConnector from "./RightDownConnector";
function Community() {
    return (
        <section id="community">
            <div className="text-center">
                <br /><br /><br /><br />
                <h1>Community Of React</h1>
                <br /><br /><br /><br />
                <br /><br />
                <div className="card border-0 shadow-lg p-5">
                    <div className="container">
                        <div className="community-container">
                            <LeftCommunity />
                            <MidCommunity />
                            <LeftConnector />
                            <RightUpperCommunity />
                            <RightCommunity />
                            <RightConnector />
                            <RightDownConnector />
                        </div>
                        <h1>React Community</h1>
                    </div>
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        </section>
    )
}
export default Community;