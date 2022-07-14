import React from "react";
import './SignUp.css';
function SignUp() {
    return (
        <>
            <section className="signUpContainer text-light p-5">
                <div className="container">
                    <div className="d-md-flex justify-content-between align-items-center">
                        <h2 className="mb-3 mb-md-0 text-white">Sign Up For Our Newsletter</h2>

                        <div className="input-group news-input">
                            <input type="text" className="form-control" placeholder="Enter Email" />
                            <button className="btn btn-dark btn-lg" type="button">Submit</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp;