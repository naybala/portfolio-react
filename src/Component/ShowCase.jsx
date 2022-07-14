import React from "react";
import Img1 from "./../asset/images/undraw_react_re_g3ui.svg"
function ShowCase() {
    const alert = () => {
        console.log("hello");
    }

    return (
        <>
            <div className="p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
                <div className="container">
                    <div className="d-sm-flex align-items-center justify-content-between">
                        <img
                            className="img-fluid w-50 d-none d-sm-block me-5 rounded-3"
                            src={Img1}
                            alt=""
                        />
                        <div>
                            <h1 className="text-decoration-none"> React Org Global</h1>
                            <p className="lead my-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, neque. Lorem
                                ipsum dolor sit amet consectetur adipisicing elit. Facere, maiores.
                            </p>
                            <a href="#document">
                                <button
                                    className="btn btn-dark btn-lg border-0"

                                    onClick={alert}
                                >
                                    Learn More
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br />
        </>
    )
}

export default ShowCase;