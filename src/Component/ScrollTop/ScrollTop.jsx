import React from "react";
import "./ScrollTop.css";
function ScrollTop() {
    window.onscroll = () => {
        // console.log(window.scrollY);
        if (window.scrollY > 380) {
            document.querySelector("#scroll-top").classList.add("active");
        } else {
            document.querySelector("#scroll-top").classList.remove("active");
        }
    };

    const scroll = () => {
        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <div onClick={scroll}>
            <a href="# #" id="scroll-top">
                <i className="bi bi-arrow-up-circle-fill"></i>
            </a>
        </div>
    )
}
export default ScrollTop;