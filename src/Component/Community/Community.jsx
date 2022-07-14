import React from "react";
import "./Community.css";
import MidCommunity from "./MidCommunity";
import LeftCommunity from "./LeftCommunity";
import LeftConnector from "./LeftConnector";
function Community() {
    return (
        <section id="community">
            <div className="text-center">
                <br /><br /><br /><br />
                <h1>Community Of React</h1>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br />
                <br /><br />
                <div className="container">
                    <div className="community-container">
                        <LeftCommunity />
                        <MidCommunity />
                        <LeftConnector />
                    </div>
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        </section>
    )
}
export default Community;