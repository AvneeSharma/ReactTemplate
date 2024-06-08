import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import img1 from '../images/image.png';

const ServiceCard = () => {
  return (
    <div className="container-fluid mt-5 pt-5 mb-5">
      {/* First Row */}
      <div className="row mb-5 align-items-center">
        <div className="col-md-4 d-flex justify-content-center">
          <img src={img1} className="img-fluid rounded-start" alt="Service 1" style={{ width: '400px', height: '400px', objectFit: 'cover' }} />
        </div>
        <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
          <h3 className="text-center p-2">Service No.1</h3>
          <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <img src={img1} className="img-fluid rounded-start" alt="Service 2" style={{ width: '400px', height: '400px', objectFit: 'cover' }} />
        </div>
      </div>
      {/* Second Row */}
      <div className="row mb-5 align-items-center">
        <div className="col-md-4 d-flex justify-content-center">
          <img src={img1} className="img-fluid rounded-start" alt="Service 1" style={{ width: '400px', height: '400px', objectFit: 'cover' }} />
        </div>
        <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
          <h3 className="text-center p-2">Service No.2</h3>
          <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <img src={img1} className="img-fluid rounded-start" alt="Service 2" style={{ width: '400px', height: '400px', objectFit: 'cover' }} />
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
