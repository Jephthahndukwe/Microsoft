import React from 'react'
import login from './img/Login _ Microsoft 365 - Google Chrome 08_12_2022 13_08_31 (2).png'
import Re1 from './img/RE1Mu3b.png' 
import {Link, NavLink} from 'react-router-dom'

const Office = () => {
  return (
    <div>
         <header>
        <nav>
            <img src={Re1} />
             
            <div className="nav-li">
                <hr className="office-hr" />  
                <h3>Microsoft 365</h3>
                <ul>
                    <li><a href="">Products</a></li>
                    <li><a href="">Resource</a></li>
                    <li><a href="">Template</a></li>
                    <li><a href="">Support</a></li>
                    <li><a href="">My account</a></li>
                    <li className="btn"><a href="">Buy now</a></li>
                </ul>
            </div>   
            <div className="account">
                <h4>All Microsoft</h4>
                <i className="fa fa-user-plus"></i>
            </div>      
        </nav>
        <div className="learn">
            <p>The Office app is becoming the Microsoft 365 app, your home to find, create, and share your content and ideas. <a href="">Learn more <i className="fas fa-chevron-right"></i></a></p>
        </div>
        <div className="head-text">
            <div className="head-btn">
                <Link to="/GoDaddy" className="BTN">Sign in</Link>
                <a href="" className="Btn">Get Microsoft 365</a>
            </div>
        </div>
    </header>
    </div>
  )
}

export default Office