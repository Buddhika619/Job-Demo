import React, { useState } from 'react'
import Dashboard from '../Dashboard'
import { createQuote, createRequest } from '../../../actions/actions'

export default function NewQuote() {
   const [inputData, setInputData] = useState({
    client: '',
    title: '',
    service: '',
    qty: '',
    price: '',
    
    otherInfo: '',
    image: '',

  })

    // Destructure inputData object to extract individual values
  const {
    client,
    title,
    service,
    qty,
    price,
    otherInfo,
  } = inputData

  // variable to store image
  const [image, setImage] = useState('')

    // Function to handle change in form input fields
  const handleMutation = (e) => {
 
   
    setInputData((inputData) => ({
      ...inputData,
      [e.target.id]: e.target.value,
    }))
  }


  // Function to handle image upload
  const uploadFileHandler = async (e) => {
    // set the selected image file to the state
    setImage(e.target.files[0]);
  }

  const submit = (e) => {
    e.preventDefault()

   // Get selected checkboxes values
    const checkboxes = e.target.elements;
    const selectedValues = [];
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].type === "checkbox" && checkboxes[i].checked) {
        selectedValues.push(checkboxes[i].value);
      }
    }

      // Create a new FormData object
    const formData = new FormData()
    formData.append('image', image)
    formData.append('title', title)

     // Create an array of service items and append it to FormData
    const serviceItems = [{
        service: service,
        qty: Number(qty),
        price: Number(price),
        total: Number(qty) * Number(price)
      }];
      formData.append('serviceItems', JSON.stringify(serviceItems));

    formData.append('otherInfo', otherInfo)
    createQuote(formData)
  }



  return (
    <>
      <Dashboard />
      <main id='main' className='main'>
        <div className='pagetitle'>
          <h1>New Quote</h1>
          <nav>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'>
                <a href='/home'>Home</a>
              </li>
              <li className='breadcrumb-item active'>New Quote</li>
            </ol>
          </nav>
        </div>

        <section className='section dashboard _request_form_dashboard'>
          <div className=' col-md-12'>
            <div className='card _request_form'>
              <div className='card-header _request_form-header'>
                {/* Request for{" "}
                <span>
                  {" "}
                  Client Name <i className="bi bi-plus"></i>
                </span> */}
                New Quote for a<span> Client ID</span>
              </div>
              <div className='card-body text-left'>
                <form className='row g-3' onSubmit={submit}>
                  <div className='col-md-8'>
                    <label for='inputName5' className='form-label'>
                      Client Id
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='client'
                      value={client}
                      onChange={handleMutation}
                    />
                  </div>

                  <div className='col-md-8'>
                    <label for='inputName5' className='form-label'>
                      Job Title
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='title'
                      value={title}
                      onChange={handleMutation}
                    />
                  </div>

                  <hr />

                  <h5>Product/Service</h5>

                  <div className='col-md-12'>
                    <table class='table'>
                      <thead>
                        <tr>
                          <th className='col-md-6' scope='col'>
                            Product/Service
                          </th>
                          <th className='col-md-2' scope='col'>
                            QTY
                          </th>
                          <th className='col-md-2' scope='col'>
                            Unit Price
                          </th>
                          <th className='col-md-2' scope='col'>
                            Total
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <input
                              type='text'
                              className='form-control'
                              id='service'
                              value={service}
                              onChange={handleMutation}
                              placeholder='service'
                            />
                          </td>
                          <td>
                            <input
                              type='text'
                              className='form-control'
                              id='qty'
                              value={qty}
                              onChange={handleMutation}
                              placeholder='1'
                            />
                          </td>
                          <td>
                            <input
                              type='text'
                              className='form-control'
                              id='price'
                              value={price}
                              onChange={handleMutation}
                              placeholder='0.00'
                            />
                          </td>
                          <td>
                            <input
                              type='text'
                              className='form-control'
                              id='total'
                              value={price * qty}
                              onChange={handleMutation}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <hr />

                  <div className='card __incard'>
                    <div className='card-header __incard-h'>
                      INTERNAL NOTES & ATTACHMENTS
                    </div>
                    <div className='card-body'>
                      <div>
                        <div>
                          <textarea
                            className='form-control'
                            placeholder='otherInfo'
                            id='otherInfo'
                            value={otherInfo}
                            onChange={handleMutation}

                          ></textarea>

                          <hr />

                          <div className='text-center my-3'>
                            Select your files here
                            <input class="" type="file" id="" onChange={uploadFileHandler}/>
                          </div>

                          <hr />

                          <div className='text-left'>
                            <h6>Link note to related</h6>

                            <input
                              className='form-check-input'
                              type='checkbox'
                              id='gridCheck'
                            />
                            <label className='form-check-label' for='gridCheck'>
                              Jobs
                            </label>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              id='gridCheck'
                            />
                            <label className='form-check-label' for='gridCheck'>
                              Invoices
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='d-grid gap-2 d-md-flex justify-content-md-start'>

                    <button type='submit' className='btn btn-md'>
                     Create Quote
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
