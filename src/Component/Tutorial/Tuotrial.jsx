import React from "react";
import Sample from "./Sample";
import Img1 from "./../../asset/images/undraw_code_review.svg";
import SampleTwo from "./SampleTwo";
import SampleThree from "./SampleThree";
function Tutorial() {
    return (
        <>
            <section className="p-5 p-lg-0 pt-lg-5 text-center text-sm-start" id="tutorial">
                <br />  <br />
                <div className="container">
                    <h1 className="text-center">Tutorials For React</h1>
                    <br />  <br />
                    <div className="d-sm-flex  justify-content-between">
                        <img
                            className="img-fluid w-50 me-5 rounded-3"
                            src={Img1}
                            alt=""
                        />
                        <div>
                            <h2><span className="text-dark"> Tutorial: Intro to React</span></h2>
                            <p className="my-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, neque. Lorem
                                ipsum dolor sit amet consectetur adipisicing elit. Facere, maiores.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, neque. Lorem
                                ipsum dolor sit amet consectetur adipisicing elit. Facere, maiores.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, neque. Lorem
                                ipsum dolor sit amet consectetur adipisicing elit. Facere, maiores.
                            </p>
                        </div>
                    </div>
                </div>
                <br /><br /><br /><br /> <br />
                <SampleTwo />
                <Sample />
                <SampleThree />
            </section>

        </>
    )
}

export default Tutorial;