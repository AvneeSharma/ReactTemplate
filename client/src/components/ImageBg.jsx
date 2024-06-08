import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//import './ImageBg.css'; // Import your CSS file for styling
import img1 from '../images/image.png';

const ImageBg = ({ text }) => {
  
  return (

    <div class="card bg-dark text-white mt-5">
        <img src={img1} class="card-img" alt="..."/>
        <div class="card-img-overlay mt-5 w-60 d-flex flex-column justify-content-center align-items-center ">
            <h5 class="card-title fs-1">Card title</h5>
            <p class="card-text fs-3">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text fs-5">Last updated 3 mins ago</p>
        </div>
</div>

    // <div>
    // <div className="image-bg m-3">
    //   <img src={img1} alt="Background" style={{ width: '100%', height: 'auto' }} />
    //   <div>Hello</div>
    // </div>
    // <div className="image-bg m-3">
    //   <img src={img1} alt="Background" style={{ width: '100%', height: 'auto' }} />
    // </div>
    // <div className="image-bg m-3">
    //   <img src={img1} alt="Background" style={{ width: '100%', height: 'auto' }} />
    // </div>
    // </div>
  );
};

export default ImageBg;