import React from 'react';
import { useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './Certificate.css'; // Import your CSS file for styling

const Certificate = () => {
  const location = useLocation();
  const { firstName, lastName, email, phone, address, address2, city, state, zip } = location.state || {};

  const printCertificate = () => {
    const printContent = document.getElementById('certificate');
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = printContent.outerHTML;
    window.print();
    document.body.innerHTML = originalContent;
    window.location.reload(); // Refresh to restore event handlers
  };

  const downloadCertificate = () => {
    const certificateElement = document.getElementById('certificate');
    html2canvas(certificateElement).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('certificate.pdf');
    });
  };

  return (
    <div className="certificate-container">
      <div id="certificate" className="certificate">
        <div className="certificate-header great-vibes-regular">
          <h1>Certificate</h1>
          <h3>Of Appreciation</h3>
        </div>
        <div className="certificate-body">
          <p className='great-vibes-regular'>This certifies that <br></br>
          <span className='name'>{firstName} {lastName}</span><br></br>
          {/* <span className='name'>Avnee Sharma</span><br></br> */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sed odit nam rem velit totam aliquid quae animi impedit magni commodi consequatur ad, nihil minima incidunt, autem iusto fugit molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quidem eligendi illum maiores voluptates at nisi ratione corrupti veritatis qui totam dicta dolores eius amet, a fugiat cupiditate suscipit optio.</p>
          <p className="disclaimer">This certificate is digitally generated and does not require a signature for validity.</p>
        </div>
        <div className="certificate-footer">
          Issued on {new Date().toLocaleDateString()}
        </div>
      </div>
      <div className="certificate-buttons">
        <button onClick={printCertificate} className="btn btn-primary mt-3">Print Certificate</button>
        <button onClick={downloadCertificate} className="btn btn-secondary mt-3">Download Certificate</button>
      </div>
    </div>
  );
};

export default Certificate;
