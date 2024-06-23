import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt=""/>
                <p>Tomoto: Your city's tastiest bites, delivered. 
                    Skip the grocery line and cooking stress. Order from your favorite restaurants with ease.
                     Track your food in real-time and savor fresh, delicious meals at your doorstep. 
                     Tomoto - where convenience meets culinary delight.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                </div>

            </div>
            <div className="footer-content-center">
                <h2>COMAPNY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>97013184988</li>
                    <li>tomoto@gmail.com</li>
                </ul>

            </div>
        </div>
        <hr/>
        <p className="footer-copyright">Copyright 2024 @Tomoto.com - All Rights are Reserved.</p>
      
    </div>
  )
}

export default Footer
