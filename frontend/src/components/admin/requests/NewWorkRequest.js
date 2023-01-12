import React, { useState } from "react";
import Dashboard from "../Dashboard";
import { createRequest } from "../../../actions/actions";

export default function NewWorkRequest() {



  const [inputData, setInputData] = useState({
    client: '',
    title: '',
    info: '',
    appointmentDay: '',
    reserveDay: '',
    otherInfo: '',

  })

  const {
    client,
    title,
    info,
    appointmentDay,
    reserveDay,
    otherInfo,
  } = inputData

  const [image, setImage] = useState('')

  const handleMutation = (e) => {
    e.preventDefault()
   
    setInputData((inputData) => ({
      ...inputData,
      [e.target.id]: e.target.value,
    }))
  }



  const uploadFileHandler = async (e) => {
    
    setImage(e.target.files[0]);
  }

  const submit = (e) => {
    e.preventDefault()


    const checkboxes = e.target.elements;
    const selectedValues = [];
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].type === "checkbox" && checkboxes[i].checked) {
        selectedValues.push(checkboxes[i].value);
      }
    }

    const formData = new FormData()
    formData.append('image', image)
    formData.append('client', client)
    formData.append('title', title)
    formData.append('info', info)
    formData.append('appointmentDay', appointmentDay)
    formData.append('reserveDay', reserveDay)
    formData.append('dayPhase', selectedValues)
    formData.append('otherInfo', otherInfo)





    createRequest(formData)
  }




  return (
    
    <>
      <Dashboard />
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>New Request</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/home">Home</a>
              </li>
              <li className="breadcrumb-item active">New Request</li>
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
                  Client Name <i class="bi bi-plus"></i>
                </span> */}
                New Work <span>Request</span>
              </div>
              <div className="card-body text-left">
                <form class="row g-3" onSubmit={submit}>
                  <div class="col-md-8">
                    <label for="inputName5" class="form-label">
                      Client ID
                    </label>
                    <input type="text" class="form-control" name='client_name' id="client" value={client} onChange={handleMutation}/>
                  </div>

                  <div class="col-md-8">
                    <label for="inputName5" class="form-label">
                      Request Title
                    </label>
                    <input type="text" class="form-control" name='title' id="title" value={title} onChange={handleMutation}/>
                  </div>

                  <h5>Service Details</h5>

                  <div class="col-md-12">
                    <label for="inputEmail5" class="form-label">
                      Please provide as much information as you can
                    </label>
                    <textarea
                      class="form-control"
                      placeholder="Address"
                      name='service_info' 
                      id="info" value={info} onChange={handleMutation}
                    >
                      {" "}
                    </textarea>
                  </div>

                  <h5>Schedule an appointment</h5>

                  <div class="col-md-4">
                    <label for="inputAddress5" class="form-label">
                      If available, which day works best for you?
                    </label>
                    <input
                      type="date"
                      class="form-control"
                      name='appointmentDay' id="appointmentDay"
                      value={appointmentDay} onChange={handleMutation}
                    />
                  </div>
                  <div class="col-md-4">
                    <label for="inputAddress5" class="form-label">
                      What is another day that works for you?
                    </label>
                    <input
                      type="date"
                      class="form-control"
                      name='reserveDay' id="reserveDay"
                      value={reserveDay} onChange={handleMutation}
                    />
                  </div>
                  <div class="col-12">
                    <label for="inputAddress5" class="form-label">
                      What are your preferred arrival times?
                    </label>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                        value= "anytime"
                      />
                      <label class="form-check-label" for="gridCheck">
                        Any time
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                        value= "morning"
                      />
                      <label class="form-check-label" for="gridCheck">
                        Morning
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                        value= "afternoon"
                      />
                      <label class="form-check-label" for="gridCheck">
                        Afternoon
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                        value= "evening"
                      />
                      <label class="form-check-label" for="gridCheck">
                        Evening
                      </label>
                    </div>
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
                            class="form-control"
                            placeholder="Address"
                            id="otherInfo"
                            onChange={handleMutation}
                          ></textarea>

                          <hr />

                          <div className="text-center my-3">
                            Select your files here
                            <input class="" type="file" id="" onChange={uploadFileHandler}/>
                          </div>

                          <hr />

                          <div className="text-left">

                            <h6>Link note to related</h6>

                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="gridCheck"
                            />
                            <label class="form-check-label" for="gridCheck">
                              Quotes
                            </label>
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="gridCheck"
                            />
                            <label class="form-check-label" for="gridCheck">
                              Jobs
                            </label>
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="gridCheck"
                            />
                            <label class="form-check-label" for="gridCheck">
                              Invoices
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          

                    <button type="submit" class="btn btn-md">
                     Create Request
                    </button>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main >
    </>
  );
}
