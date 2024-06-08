import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Certificate from '../components/Certificate'

const GetCertificate = () => {
  return (
    <div>
        <Header/>
        <p className='mt-5 p-5 fs-1'>Get your certificate</p>
        <Certificate/>
        <Footer/>
    </div>
  )
}

export default GetCertificate
