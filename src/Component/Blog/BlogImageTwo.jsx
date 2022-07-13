import React from "react";
import Img1 from "./../../asset/images/imgThree.jpeg";
import Img2 from "./../../asset/images/imgFour.png"
function BlogImageTwo() {
    return (
        <>
            <div className="flex-container">
                <div className="image-container">
                    <img src={Img1} alt="" className="image" />
                    <div className="overlay">
                        <div className="text">
                            <a href="https://www.w3schools.com/css/tryit.asp?filename=trycss_css_image_overlay_slidetop" className="text-white text-decoration-none" target="__blink">visit here</a>
                        </div>
                    </div>
                </div>
                <div className="image-container">
                    <img src={Img2} alt="" className="image" />
                    <div className="overlay">
                        <div className="text">
                            <a href="https://www.w3schools.com/css/tryit.asp?filename=trycss_css_image_overlay_slidetop" className="text-white text-decoration-none" target="__blink">visit here</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default BlogImageTwo;


