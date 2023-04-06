import { Link } from "react-router-dom";
import "./AboutContentStyles.css"
import React from 'react'
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.jpg";
const AboutContent = () => {
  return <div className="about">
    <div className="left">
    <h1>WHO AM I?</h1>
    <p>I am an ambitious individual who
is looking to broaden my career
path. My background lays mostly
in analyzing and solving critical
situations.</p>
<Link to=" /content">
    <button className="btn">Contact</button>
</Link>
    </div>
    <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={React1}
                    className="img" 
                    alt="true"/>
            </div>
            <div className="img-stack bottom">
                <img src={React2}
                    className="img" 
                    alt="true"/>
            </div>
        </div>
    </div>
  </div>
  
}

export default AboutContent;