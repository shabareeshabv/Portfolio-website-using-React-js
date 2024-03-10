import "./FooterStyle.css"
import React from 'react'
import { FaHome, FaPhone ,FaMailBulk, FaFacebook, FaTwitter, FaLinkedin} from "react-icons/fa"

export const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
  <div className="location">
    <FaHome size={20} style={{color:"fff",marginRight:"2rem"}}/>

    <div>
<p> Bangalore</p>
<p> India</p>
    </div>
  </div>
  <div className="phone">
 <h4><FaPhone size={20} style={{color:"fff" , marginRight:"2rem"}}/>
 +91 987654321</h4>
  </div>
  <div className="email">
 <h4><FaMailBulk size={20} style={{color:"fff" , marginRight:"2rem"}}/>
 info@gmail.com</h4>
  </div>
   </div>
            <div className="right">
              <h4>About the company</h4>
              <p>Together, let's continue driving our company's success through dedication and collaboration.</p>
             <div className="social">
             <FaFacebook size={20} style={{color:"fff" , marginRight:"2rem"}}/>
             <FaTwitter size={20} style={{color:"fff" , marginRight:"2rem"}}/>
             <FaLinkedin size={20} style={{color:"fff" , marginRight:"2rem"}}/>
             </div>
            </div>
        </div>
    </div>
  )
}
