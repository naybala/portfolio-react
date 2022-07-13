import React from "react";
import Img1 from "./../../asset/images/react-components@1.5x.svg"
import "./BlogImgThree.css"
function BlogImageThree() {
    return (
        <>
            <div className="imageThree-container">
                <img src={Img1} alt="" className="imageThree" />
            </div>
            <h5 className="text-white text-center">The Component Life Cycle is Here Just </h5>
        </>
    )
};

export default BlogImageThree;