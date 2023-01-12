import React from 'react';
import heroImg from '../../assets/imgs/hero1.jpg';

export default function Hero() {
    return (
        <>
            {/* ======= Hero Section =======  */}
            <section id="hero" className="d-flex align-items-center">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h1>Organize your service business and impress your clients</h1>
                            <h2>Manage your business and back-and-forth with customers from one place. Estimate, quote, schedule, invoice, get paid—no software experience required.</h2>
                            <div>
                                <input className='mt-4 form-control form-control-lg' type='email' placeholder='Email Address' />
                            </div>
                            <div>
                                <a href="" className="btn-get-started scrollto">Start Free Trial</a>
                            </div>
                        </div>

                        <div className="col-lg-6 order-1 order-lg-2 hero-img">
                            <img src={heroImg} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
