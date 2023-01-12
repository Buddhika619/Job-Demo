import React from 'react'
import NavBar from './NavBar'
import loginImg from '../../assets/imgs/login.jpg'

export default function SignIn() {
    return (
        <>
            <NavBar />
            <section className="container vh-80">
                <div className="container py-5 h-80">
                    <div className="row d-flex align-items-center justify-content-center h-100">
                        <div className="col-md-8 col-lg-7 col-xl-6">
                            <img src={loginImg}
                                className="img-fluid" alt="Phone image" />
                        </div>
                        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1 outlined ">
                            <h3 className="mb-4">Login</h3>
                            <form>
                                <div className="form-outline mb-2">
                                    <input type="email" id="form1Example13" className="form-control form-control-lg" />
                                    <label className="form-label" for="form1Example13">Email address</label>
                                </div>


                                <div className="form-outline mb-2">
                                    <input type="password" id="form1Example23" className="form-control form-control-lg" />
                                    <label className="form-label" for="form1Example23">Password</label>
                                </div>

                                <div className="d-flex justify-content-around align-items-center mb-4">

                                    {/* <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                                        <label className="form-check-label" for="form1Example3"> Remember me </label>
                                    </div> */}
                                    <a href="#!">Forgot password?</a>
                                </div>


                                <button type="submit" className="col-md-12 btn btn-md btn-block signin-btn">Sign in</button>

                                <div className="divider d-flex align-items-center my-2">
                                    <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                                </div>

                                <a className="col-md-12 btn btn-md btn-block my-1 gmail-link" href="#!"
                                    role="button">
                                    <i className="fa-brands fa-google me-2"></i>Continue with Google
                                </a>
                                <a className="col-md-12  btn btn-md btn-block my-1 fb-link" href="#!"
                                    role="button">
                                    <i className="fab fa-facebook-f me-2"></i>Continue with FaceBook</a>
                            </form>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
