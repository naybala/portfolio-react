import React from "react";
import Img1 from "./../../asset/images/undraw_next_js_.svg"
function Sample() {
    return (
        <>
            <div className="container">
                <div className="d-sm-flex  justify-content-between">
                    <div>
                        <h2><span className="text-dark"> Next: Intro to Next.Js</span></h2>
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

export default Sample;