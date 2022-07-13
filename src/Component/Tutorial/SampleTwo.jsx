import React from "react";
import Img1 from "./../../asset/images/undraw_feedback.svg"
function SampleTwo() {
    return (
        <>
            <div className="container">
                <div className="d-sm-flex  align-items-center  justify-content-between">
                    <div>
                        <h2><span className="text-dark"> API: Work With Laravel</span></h2>
                        <p className="my-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, neque. Lorem
                            ipsum dolor sit amet consectetur adipisicing elit. Facere, maiores.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, neque. Lorem
                            ipsum dolor sit amet consectetur adipisicing elit. Facere, maiores.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, neque. Lorem
                            ipsum dolor sit amet consectetur adipisicing elit. Facere, maiores.
                        </p>
                    </div>
                    <img
                        className="img-fluid w-50 me-5 rounded-3"
                        src={Img1}
                        alt=""
                    />
                </div>
            </div>
            <br /><br /><br /><br /> <br />
        </>
    )
}

export default SampleTwo;