import React from "react";
import Dashboard from "./Dashboard";

export default function Home() {
  return (
    <>
      <Dashboard />
      <main id="main" class="main">
        <div class="pagetitle">
          <h1>Dashboard</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="/home">Home</a>
              </li>
              <li class="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>

        <section class="section dashboard">
          <div className=" col-md-12">
            <div className="row">
              <div class="card card-request col-md-3">
                <div class="card-header card-request-header">REQUESTS</div>
                <div class="card-body text-center">
                  <p>Record new service requests from your clients</p>
                  <a href="/new_work_request" className="btn btn-sm mx-auto">
                    Create A Request
                  </a>
                </div>
              </div>
              <div class="card card-quotes col-md-3">
                <div class="card-header card-quotes-header">QUOTES</div>
                <div class="card-body text-center">
                  <p>
                    Send your clients professional quotes they can approve
                    online
                  </p>
                  <a href="" className="btn btn-sm mx-auto">
                    Create A Quote
                  </a>
                </div>
              </div>
              <div class="card card-jobs col-md-3 ">
                <div class="card-header card-jobs-header">JOBS</div>
                <div class="card-body text-center">
                  <p>
                    Schedule jobs with all the details you need to get them done
                  </p>
                  <a href="" className="btn btn-sm mx-auto">
                    Create A Job
                  </a>
                </div>
              </div>
              <div class="card card-invoices col-md-3">
                <div class="card-header card-invoices-header">INVOICES</div>
                <div class="card-body text-center">
                  <p>
                    Send your clients professional invoices they can pay online
                  </p>
                  <a href="" className="btn btn-sm mx-auto">
                    Create A Invoice
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
