import React, { useState } from 'react'
import Dashboard from '../Dashboard'
import { createClient } from '../../../actions/actions'

export default function NewClient() {
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    company: '',
    phone: '',
    email: '',
    street1: '',
    city: '',
    state: '',
    country: '',
    zip: '',
  })

  // Destructure formData object to extract individual values
  const {
    title,
    firstName,
    lastName,
    company,
    phone,
    email,
    street1,
    city,
    state,
    country,
    zip,
  } = formData

  // Function to handle change in form input fields
  const handleMutation = (e) => {
    setFormData((formData) => ({
      ...formData, // spread existing state
      [e.target.id]: e.target.value, // update the state with the current value of the input field
    }))
  }

  // Function to handle form submission
  const submit = (e) => {
    e.preventDefault() // prevent default behavior of form submission
    createClient({
      name: `${title} ${firstName} ${lastName}`,
      company,
      phone,
      email,
      address: {
        street1: street1,
        city: city,
        state: state,
        country: country,
        zip: zip,
      },
    })
    alert('A client has been successfully added.')
  }

  return (
    <>
      <Dashboard />
      <main id='main' className='main'>
        <div className='pagetitle'>
          <h1>New Client</h1>
          <nav>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'>
                <a href='/home'>Home</a>
              </li>
              <li className='breadcrumb-item active'>New Client</li>
            </ol>
          </nav>
        </div>

        <section className='section dashboard _new_client_dashboard'>
          <div className='card col-md-12 row _new_client'>
            <div className='card-body text-left'>
              <form className='row g-3' onClick={submit}>
                <div className=' col-md-7'>
                  <h4>
                    <i className='bi bi-person-lines-fill'></i> CLIENT DETAILS
                  </h4>

                  <div
                    className='input-group mt-4'
                    role='group'
                    aria-label='Basic outlined example'
                  >
                    <select
                      className='form-select'
                      name='title'
                      id='title'
                      aria-label=''
                      onChange={handleMutation}
                    >
                      <option>{title}</option>
                      <option value='Mr' selected>
                        Mr.
                      </option>
                      <option value='Ms'>Ms.</option>
                      <option value='Mrs'>Mrs.</option>
                      <option value='Miss'>Miss.</option>
                      <option value='Dr'>Dr.</option>
                    </select>
                    <input
                      type='text'
                      className='form-control'
                      name='firstName'
                      id='firstName'
                      placeholder='First Name'
                      value={firstName}
                      onChange={handleMutation}
                    />
                    <input
                      type='text'
                      className='form-control'
                      name='lastName'
                      id='lastName'
                      placeholder='Last Name'
                      value={lastName}
                      onChange={handleMutation}
                    />
                  </div>

                  <div className='input-group flex-nowrap mt-2'>
                    <span className='input-group-text' id='addon-wrapping'>
                      <i className='bi bi-buildings'></i>
                    </span>
                    <input
                      type='text'
                      className='form-control'
                      name='company_name'
                      id='company'
                      placeholder='Company Name'
                      value={company}
                      onChange={handleMutation}
                    />
                  </div>

                  <div>
                    <h5 className='mt-3 mb-4'>Contact Details</h5>
                  </div>
                  <div className='input-group flex-nowrap'>
                    <span className='input-group-text' id='addon-wrapping'>
                      <i className='bi bi-telephone'></i>
                    </span>
                    <input
                      type='text'
                      className='form-control'
                      name='phone'
                      id='phone'
                      placeholder='Phone number'
                      value={phone}
                      onChange={handleMutation}
                    />
                  </div>

                  <div className='input-group flex-nowrap'>
                    <span className='input-group-text' id='addon-wrapping'>
                      <i className='bi bi-envelope-at'></i>
                    </span>
                    <input
                      type='text'
                      className='form-control mt-1'
                      name='email'
                      id='email'
                      placeholder='Email Address'
                      value={email}
                      onChange={handleMutation}
                    />
                  </div>
                </div>

                <div className='col-md-5 right_client'>
                  <h4>
                    <i className='bi bi-house-lock-fill'></i> PROPERTY DETAILS
                  </h4>

                  <div className='col-md-12'>
                    <div className='input-group flex-nowrap'>
                      {/* <span className="input-group-text" id="addon-wrapping"><i className="bi bi-envelope-at"></i></span> */}
                      <input
                        type='text'
                        className='form-control mt-1'
                        name='street'
                        id='street1'
                        placeholder='Street 1'
                        value={street1}
                        onChange={handleMutation}
                      />
                    </div>
                    <div className='input-group flex-nowrap'>
                      {/* <span className="input-group-text" id="addon-wrapping"><i className="bi bi-envelope-at"></i></span> */}
                      <input
                        type='text'
                        className='form-control mt-1'
                        name='city'
                        id='city'
                        placeholder='City'
                        value={city}
                        onChange={handleMutation}
                      />
                    </div>
                    <div className='input-group flex-nowrap'>
                      {/* <span className="input-group-text" id="addon-wrapping"><i className="bi bi-envelope-at"></i></span> */}
                      <input
                        type='text'
                        className='form-control mt-1'
                        name='state'
                        id='state'
                        placeholder='State'
                        value={state}
                        onChange={handleMutation}
                      />
                    </div>
                    <div className='input-group flex-nowrap'>
                      {/* <span className="input-group-text" id="addon-wrapping"><i className="bi bi-envelope-at"></i></span> */}
                      <input
                        type='text'
                        className='form-control mt-1'
                        name='country'
                        id='country'
                        placeholder='Country'
                        value={country}
                        onChange={handleMutation}
                      />
                    </div>
                    <div className='input-group flex-nowrap'>
                      {/* <span className="input-group-text" id="addon-wrapping"><i className="bi bi-envelope-at"></i></span> */}
                      <input
                        type='text'
                        className='form-control mt-1'
                        name='zip'
                        id='zip'
                        placeholder='zip'
                        value={zip}
                        onChange={handleMutation}
                      />
                    </div>
                  </div>
                </div>
                <div className='d-grid gap-2 d-md-flex justify-content-md-start'>
                  <button type='submit' className='btn btn-md btn-client'>
                    Save Client
                  </button>
                </div>
              </form>
            </div>

            {/* ----------------------------- */}
          </div>
        </section>
      </main>
    </>
  )
}
