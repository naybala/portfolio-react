import React from "react";
import Img1 from "./../../asset/images/undraw_join_re_w1lh.svg"
import Img2 from "./../../asset/images/undraw_project_complete_lwss.svg"
import "./Footer.css"
function Footer() {
    return (
        <footer className="p-4 text-center position-relative footer bg-light">
            <p className="lead">Copyright &copy; 2022</p>
            <section className="p-5">
                <div className="container">
                    <div className="row text-center g-4 g-sm-0">
                        <div className="footerSvgOne">
                            <img
                                className="img-fluid d-none d-sm-block"
                                src={Img2}
                                alt=""
                            />
                        </div>
                        <div className="col-lg-4">
                            <div className="card me-1 border-0">
                                <div className="card-body text-center">
                                    <div className="h1 mb-3">
                                        <i className="bi bi-telephone-outbound-fill"></i>
                                    </div>
                                    <h3 className="card-title mb-3">Virtual</h3>
                                    <p className="card-text">
                                        <span className="spanHead">Hot-line</span> : 09763684400 <br />
                                        <span className="spanHead">Office-ph</span> : 09763684400 <br />
                                        <span className="spanHead">Current-line</span> : 09763684400 <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card me-1 border-0">
                                <div className="card-body text-center">
                                    <div className="h1 mb-3">
                                        <i className="bi bi-envelope-open-fill"></i>
                                    </div>
                                    <h3 className="card-title mb-3">Email</h3>
                                    <p className="card-text">
                                        <span className="spanHead">Email</span> : adipisicielitIlloisi@email.com
                                        <br />
                                        <span className="spanHead">Gmail</span>
                                        :adipisicielitIlloisi@gmail.com <br />
                                        <span className="spanHead">Microsoft Mail</span>
                                        :adipisicielitIlloisi@outlook.com <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card border-0">
                                <div className="card-body text-center">
                                    <div className="h1 mb-3">
                                        <i className="bi bi-people"></i>
                                    </div>
                                    <h3 className="card-title mb-3">In Person</h3>
                                    <p className="card-text">
                                        <span className="spanHead">Guy One</span> :
                                        adipisicielitIlloisi@email.com <br />
                                        <span className="spanHead">Guy Two</span>
                                        :adipisicielitIlloisi@gmail.com <br />
                                        <span className="spanHead">Guy Three</span>
                                        :adipisicielitIlloisi@outlook.com <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="footerSvgTwo">
                            <img
                                className="img-fluid d-none d-sm-block"
                                src={Img1}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer;