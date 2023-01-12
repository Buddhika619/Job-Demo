import React from "react";
import Dashboard from "../Dashboard";

export default function NewClient() {
    return (
        <>
            <Dashboard />
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>New Client</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="/home">Home</a>
                            </li>
                            <li className="breadcrumb-item active">New Client</li>
                        </ol>
                    </nav>
                </div>

                <section className="section dashboard _new_client_dashboard">
                    <div className="card col-md-12 row _new_client">

                        <div className="card-body text-left">
                            <form className="row g-3">

                                <div className=" col-md-7">

                                    <h4><i className="bi bi-person-lines-fill"></i> CLIENT DETAILS</h4>

                                    <div className="input-group mt-4" role="group" aria-label="Basic outlined example">
                                        <select className="form-select" name='title' id="title" aria-label="">
                                            <option selected>No Title</option>
                                            <option value="Mr">Mr.</option>
                                            <option value="Ms">Ms.</option>
                                            <option value="Mrs">Mrs.</option>
                                            <option value="Miss">Miss.</option>
                                            <option value="Dr">Dr.</option>
                                        </select>
                                        <input type="text" className="form-control" name='first_name' id="first_name" placeholder="First Name" />
                                        <input type="text" className="form-control" name='last_name' id="last_name" placeholder="Last Name" />
                                    </div>

                                    <div className="input-group flex-nowrap mt-2">
                                        <span className="input-group-text" id="addon-wrapping"><i className="bi bi-buildings"></i></span>
                                        <input type="text" className="form-control" name='company_name' id="company_name" placeholder="Company Name" />
                                    </div>

                                    <div className="form-check mt-2">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="gridCheck"
                                        />
                                        <label className="form-check-label" for="gridCheck">
                                            Use company name as the primary name
                                        </label>
                                    </div>
                                    <div>
                                        <h5 className="mt-3 mb-4">Contact Details</h5>
                                    </div>
                                    <div className="input-group flex-nowrap">
                                        <span className="input-group-text" id="addon-wrapping"><i className="bi bi-telephone"></i></span>
                                        <input type="text" className="form-control" name='phone' id="phone" placeholder="Phone number" />
                                    </div>
                                    <div className="input-group flex-nowrap">
                                        <span className="input-group-text" id="addon-wrapping"><i className="bi bi-envelope-at"></i></span>
                                        <input type="text" className="form-control mt-1" name='first_name' id="first_name" placeholder="Email Address" />
                                    </div>
                                </div>

                                <div className="col-md-5 right_client">

                                    <h4><i className="bi bi-house-lock-fill"></i> PROPERTY DETAILS</h4>

                                    <div className="col-md-12">
                                        <div className="input-group flex-nowrap">
                                            {/* <span className="input-group-text" id="addon-wrapping"><i className="bi bi-envelope-at"></i></span> */}
                                            <input type="text" className="form-control mt-1" name='street' id="street" placeholder="Street 1" />
                                        </div>
                                        <div className="input-group flex-nowrap">
                                            {/* <span className="input-group-text" id="addon-wrapping"><i className="bi bi-envelope-at"></i></span> */}
                                            <input type="text" className="form-control mt-1" name='city' id="city" placeholder="City" />
                                        </div>
                                        <div className="input-group flex-nowrap">
                                            {/* <span className="input-group-text" id="addon-wrapping"><i className="bi bi-envelope-at"></i></span> */}
                                            <input type="text" className="form-control mt-1" name='state' id="state" placeholder="State" />
                                        </div>
                                        <div className="input-group flex-nowrap">
                                            {/* <span className="input-group-text" id="addon-wrapping"><i className="bi bi-envelope-at"></i></span> */}
                                            <input type="text" className="form-control mt-1" name='country' id="country" placeholder="Country" />
                                        </div>
                                        <div className="input-group flex-nowrap">
                                            {/* <span className="input-group-text" id="addon-wrapping"><i className="bi bi-envelope-at"></i></span> */}
                                            <input type="text" className="form-control mt-1" name='zip' id="zip" placeholder="zip" />
                                        </div>
                                    </div>

                                </div>

                            </form>
                        </div>


                        {/* ----------------------------- */}

                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="submit" className="btn btn-md btn-client">
                                Cancel
                            </button>

                            <button type="submit" className="btn btn-md btn-client">
                                Select Client
                            </button>

                        </div>
                    </div>
                </section>
            </main >
        </>
    );
}
