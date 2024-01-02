import React from 'react'
import Layout from '../components/Layout/Layout'
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi"

const Contact = () => {
  return (
    <Layout title={"Contact Us"}>
      <div className="row contactus">

        <div className="col-md-6">
          <img src="/images/contactus.jpeg" alt="ContactUs"
            style={{ width: "100%" }} />
        </div>

        <div className="col-md-4 right">
          <h1 className='bg-dark p-2 text-white text-center'>CONTACT US</h1>
          <p className='text-justify mt-2' style={{'fontSize':'1.1rem'}}>
            Any query and info about product feel free to call anytime we 24X7 available
          </p>
          <p className='mt-3'style={{'fontSize':'1.1rem'}}>
            <BiMailSend /> :www.helprohitecommerce@gmail.com
          </p>
          <p className='mt-3' style={{'fontSize':'1.1rem'}}>
            <BiPhoneCall /> : +91 7506939237
          </p>
          <p className='mt-3' style={{'fontSize':'1.1rem'}}>
            <BiSupport /> : 1800-5666-9898 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
