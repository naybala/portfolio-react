import React from "react";
import Question from "./Question";
import "./Document.css";

function Document() {
    return (
        <>
            <section className="p-5 bg-light" id="document">
                <br />  <br />
                <div className="container">
                    <h1 className="text-center">Documentation</h1>
                    <br />
                    <div className="row text-center g-4">
                        <div className="col-md">
                            <div className="card bg-dark text-light">
                                <div className="card-body text-center">
                                    <div className="h1 mb-3">
                                        <i className="bi bi-laptop"></i>
                                    </div>
                                    <h3 className="card-title mb-3">Virtual</h3>
                                    <p className="card-text">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, quas
                                        quidem possimus dolorum esse eligendi?
                                    </p>
                                    <button className="btn">Read More</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="card bg-secondary text-light">
                                <div className="card-body text-center">
                                    <div className="h1 mb-3">
                                        <i className="bi bi-person-square"></i>
                                    </div>
                                    <h3 className="card-title mb-3">Hybrid</h3>
                                    <p className="card-text">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, quas
                                        quidem possimus dolorum esse eligendi?
                                    </p>
                                    <button className="btn">Read More</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="card bg-dark text-light">
                                <div className="card-body text-center">
                                    <div className="h1 mb-3">
                                        <i className="bi bi-people"></i>
                                    </div>
                                    <h3 className="card-title mb-3">In Person</h3>
                                    <p className="card-text">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, quas
                                        quidem possimus dolorum esse eligendi?
                                    </p>
                                    <button className="btn">Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br /><br />
                <Question />
            </section>
        </>
    )
}

export default Document;