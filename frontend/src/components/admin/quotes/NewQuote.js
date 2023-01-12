import React from 'react'
import Dashboard from '../Dashboard'

export default function NewQuote() {
    return (
        <>
            <Dashboard />
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>New Quote</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="/home">Home</a>
                            </li>
                            <li className="breadcrumb-item active">New Quote</li>
                        </ol>
                    </nav>
                </div>

                <section className="section dashboard _request_form_dashboard">
                    <div className=" col-md-12">
                        <div className="card _request_form">
                            <div className="card-header _request_form-header">
                                {/* Request for{" "}
                <span>
                  {" "}
                  Client Name <i className="bi bi-plus"></i>
                </span> */}
                                New Quote for a<span> Client</span>
                            </div>
                            <div className="card-body text-left">
                                <form className="row g-3">
                                    <div className="col-md-8">
                                        <label for="inputName5" className="form-label">
                                            Client Name
                                        </label>
                                        <input type="text" className="form-control" id="inputName5" />
                                    </div>

                                    <div className="col-md-8">
                                        <label for="inputName5" className="form-label">
                                            Job Title
                                        </label>
                                        <input type="text" className="form-control" id="inputName5" />
                                    </div>

                                    <hr />

                                    <h5>Product/Service</h5>

                                    <div className="col-md-12">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th className='col-md-6' scope="col">Product/Service</th>
                                                    <th className='col-md-2' scope="col">QTY</th>
                                                    <th className='col-md-2' scope="col">Unit Price</th>
                                                    <th className='col-md-2' scope="col">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <input type="text" className="form-control" id="inputName5" placeholder="Name" />
                                                    </td>
                                                    <td>
                                                        <input type="text" className="form-control" id="inputName5" placeholder="1" />
                                                    </td>
                                                    <td>
                                                        <input type="text" className="form-control" id="inputName5" placeholder="0.00" />
                                                    </td>
                                                    <td>
                                                        <input type="text" className="form-control" id="inputName5" placeholder="0.00" />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <hr />

                                    <div className="card __incard">
                                        <div className="card-header __incard-h">
                                            INTERNAL NOTES & ATTACHMENTS
                                        </div>
                                        <div className="card-body">
                                            <div>
                                                <div>
                                                    <textarea
                                                        className="form-control"
                                                        placeholder="Address"
                                                        id="floatingTextarea"
                                                    ></textarea>

                                                    <hr />

                                                    <div className="text-center my-3">
                                                        Select your files here
                                                        <input className="" type="file" id="" />
                                                    </div>

                                                    <hr />

                                                    <div className="text-left">

                                                        <h6>Link note to related</h6>

                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="gridCheck"
                                                        />
                                                        <label className="form-check-label" for="gridCheck">
                                                            Jobs
                                                        </label>
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="gridCheck"
                                                        />
                                                        <label className="form-check-label" for="gridCheck">
                                                            Invoices
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                        <button type="submit" className="btn btn-md ">
                                            Cancel
                                        </button>

                                        <button type="submit" className="btn btn-md">
                                            Select Client
                                        </button>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main >
        </>
    )
}
