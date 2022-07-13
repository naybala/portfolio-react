import React, { useEffect, useState } from "react";
import "./Navbar.css"
const imgurl = "https://www.seekpng.com/png/detail/80-803597_io-is-compatible-with-all-javascript-frameworks-and.png"



function Navbar() {
  const [offest, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);


  }, []);

  const sections = document.querySelectorAll("section[id]");
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");
    // console.log(sectionId);
    if (offest > sectionTop && offest <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-item a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav-item a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });



  return (
    <>
      <nav className="navbar navbar-expand-lg py-3 fixed-top bg-light" onScrollCapture={useEffect}>
        <div className="container">
          <img
            src={imgurl}
            className="img-fluid rounded-2"
            alt=""
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#document" className="nav-link">Document</a>
              </li>
              <li className="nav-item">
                <a href="#tutorial" className="nav-link">Tutorials</a>
              </li>
              <li className="nav-item">
                <a href="#blog" className="nav-link">Blog</a>
              </li>
              <li className="nav-item">
                <a href="#community" className="nav-link">Community</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br /><br /><br />
      <br /><br /><br /> <br />
    </>
  )
}

export default Navbar;