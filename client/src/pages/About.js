import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout title={"About Us - Ecommerce App"}>
      <div className="row contactus">

        <div className="col-md-6">
          <img src="/images/about.jpeg" alt="ContactUs"
            style={{ width: "100%" }} />
        </div>

        <div className="col-md-4 right">
          <h1 className='bg-dark p-2 text-white text-center'>ABOUT US</h1>
          <p className= 'text-justify mt-2'>
            <li style={{"fontSize":'20px'}}> 
          Welcome to Famms-Cart, where quality meets convenience. We're dedicated to curating premium products, ensuring a seamless shopping experience, and prioritizing your satisfaction. Join our community, explore top-notch offerings, and elevate your lifestyle with us. Happy shopping!
            </li>
          </p>
          {/* <p className='mt-3'>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aperiam.</li>
          </p>
          <p className='mt-3'>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, eligendi.</li>
          </p> */}
        </div>
      </div>
    </Layout>
  )
}

export default About
