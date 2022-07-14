import React from "react";
import Img1 from "./../../asset/images/imgOneReal.png";
import Img2 from "./../../asset/images/imgTwo.png"
function BlogImage() {
    return (
        <>
            <div className="flex-container">
                <div className="image-container">
                    <img src={Img1} alt="" className="image" />
                    <div className="overlay">
                        <div className="text">
                            <a href="https://www.w3schools.com/css/tryit.asp?filename=trycss_css_image_overlay_slidetop" className="text-white text-decoration-none" target="__blink"> &nbsp;visit here&nbsp; </a>
                        </div>
                    </div>
                </div>
                <div className="image-container">
                    <img src={Img2} alt="" className="image" />
                    <div className="overlay">
                        <div className="text">
                            <a href="https://www.w3schools.com/css/tryit.asp?filename=trycss_css_image_overlay_slidetop" className="text-white text-decoration-none" target="__blink">&nbsp;visit here&nbsp;</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default BlogImage;


