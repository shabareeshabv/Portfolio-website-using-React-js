import "./HeroimgStyle.css"
import React from 'react'
import img1 from "../assets/Images/img1.jpg"
import { Link } from "react-router-dom"

export const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
   <img  className="into-img" src={img1}  alt="images"/>
        </div>
        <div className="content">
            <p>
                HI, I'M  A 
            </p>
            <h1>React Developer.</h1>
            <div>
                <Link to="/project" className="btn"> Projects</Link>
                <Link to="/contact" className="btn btn-light"> Contact</Link>
            </div>
        </div>
    </div>
  )
}
