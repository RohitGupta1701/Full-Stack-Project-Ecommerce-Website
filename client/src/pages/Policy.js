import React from 'react'
import Layout from '../components/Layout/Layout';

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
         <div className="row contactus">

<div className="col-md-6">
  <img src="/images/contactus.jpeg" alt="ContactUs"
    style={{ width: "100%" }} />
</div>

<div className="col-md-4 right" >
  <h1 className='bg-dark p-2 text-white text-center'>PRIVACY POLICY</h1>
  <p className='mt-3' style={{'fontSize':'1.1rem'}}>
    <li>At Famms cart, we value and respect your privacy. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you use our website or engage with our services.
</li>
  </p>
  <p className='mt-3' style={{'fontSize':'1.1rem'}}>
    <li>We collect personal information that you provide to us, such as your name, email address, shipping address, and payment details. Additionally, we may collect information about your browsing behavior, device information, and other relevant data.

</li>
  </p>
  <p className='mt-3' style={{'fontSize':'1.1rem'}}>
    <li>If you have any questions or concerns about our Privacy Policy, please contact us at [your contact information].</li>
  </p>
</div>
</div>
    </Layout>
  )
}

export default Policy;
