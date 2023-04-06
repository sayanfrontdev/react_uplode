import "./FooterStyles.css"

import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
    <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"white", marginRight: "2rem"}}/>
                <div>
                    <p> Midnapore Town (West Bengal) 721102</p>
                    <p>India</p>
                </div>
            </div>
            <div className="phone">
            <h4><FaPhone size={20} style={{color:"white", marginRight: "2rem"}}/>
            +91 6294513408
            </h4>
            
            </div>
            <div className="email">
            <h4><FaMailBulk size={20} style={{color:"white", marginRight: "2rem"}}/>
            sayanmanda1922001@gmail.com</h4>
            
            </div>
        </div>
        <div className="right">
            <h4>About Me</h4>
            <p>This is me Sayan Mandal.Aspiring AutoCAD Software Developer || Seeking Entry-Level Programming Position || Experienced in Java and Python || Web developer</p>
            <div className="social">
            <FaFacebook
            size={30} style={{color:"white", marginRight: "1rem"}}/>
            <FaTwitter
            size={30} style={{color:"white", marginRight: "1rem"}}/>
            <FaLinkedin
            size={30} style={{color:"white", marginRight: "1rem"}}/>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Footer