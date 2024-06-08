import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useNavigate } from 'react-router-dom';

const ApplicationForm = () => {

    const navigate = useNavigate(); // Ensure navigate is defined here
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        resume: null,
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleFileChange = (e) => {
        setFormData((prevData) => ({
          ...prevData,
          resume: e.target.files[0],
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        for (const key in formData) {
          formDataToSend.append(key, formData[key]);
        }
    
        try {
            console.log(formDataToSend);
          const response = await fetch('http://localhost:5000/send-email', {
            method: 'POST',
            body: formDataToSend,
          });
    
          const result = await response.json();

      if (result.success) {
        console.log('Email sent successfully');
        navigate('/certificate', { state: formData });
      } else {
        console.error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
    


  return (
    <div className='p-3 mb-2 bg-primary-subtle text-primary-emphasis container-fluid'>
        <form className="row g-3 mt-5 p-5 w-75" onSubmit={handleSubmit}>
        <div className="col-md-6">
            <label for="firstName" className="form-label fs-5 fw-semibold">First Name</label>
            <input type="text" className="form-control" placeholder="First name" aria-label="First name" id='firstName' name="firstName" value={formData.firstName} onChange={handleChange}/>
        </div>
        <div className="col-md-6">
            <label for="lastName" className="form-label fs-5 fw-semibold">Last Name</label>
            <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" id='lastName' name="lastName" value={formData.lastName} onChange={handleChange}/>
        </div>
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label fs-5 fw-semibold">Email</label>
    <input type="email" className="form-control" id="inputEmail4" name="email" value={formData.email} onChange={handleChange}/>
  </div>
  <div className="col-md-6">
    <label for="phone" className="form-label fs-5 fw-semibold">Phone Number</label>
    <input type="number" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange}/>
  </div>
  <div className="col-12">
    <label for="inputAddress" className="form-label fs-5 fw-semibold">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" name="address" value={formData.address} onChange={handleChange}/>
  </div>
  <div className="col-12">
    <label for="inputAddress2" className="form-label fs-5 fw-semibold">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" name="address2" placeholder="Apartment, studio, or floor" value={formData.address2} onChange={handleChange}/>
  </div>
  <div className="col-md-6">
    <label for="inputCity" className="form-label fs-5 fw-semibold">City</label>
    <input type="text" className="form-control" id="inputCity" name="city" value={formData.city} onChange={handleChange}/>
  </div>
  <div className="col-md-4">
  <label for="inputState" className="form-label fs-5 fw-semibold">State</label>
  <input type="text" className="form-control" id="inputState" name="state" value={formData.state} onChange={handleChange}/>
  </div>
  <div className="col-md-2">
    <label for="inputZip" className="form-label fs-5 fw-semibold">Zip</label>
    <input type="text" className="form-control" id="inputZip" name="zip" value={formData.zip} onChange={handleChange}/>
  </div>
  <div className="col-md-6">
  <label className="form-label fs-5 fw-semibold" for="inputGroupFile01">Upload Resume</label>
  <input type="file" className="form-control" id="inputGroupFile01" name="resume" onChange={handleFileChange}/>
</div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label fs-5" htmlFor="gridCheck">
        All information provided by me is correct. I agree to all terms & conditions.
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary btn-lg">Submit</button>
  </div>
</form>
    </div>
  )
}

export default ApplicationForm;
