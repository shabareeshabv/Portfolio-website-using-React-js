import { Link } from "react-router-dom"
import "./AboutContentStyle.css"

import React from 'react'
import react1 from "../assets/Images/download1.jpg"
import react2 from "../assets/Images/download2.jpg"

export const AboutContent = () => {
  return (
    <div className="about">
<div className="left">
    <h1> Who Am i?</h1>
    <p>Im a react front-end Developer . I create responsive secure websites for my clients</p>
    <Link to="/contact">
        <button className="btn">contact</button>

    </Link>

</div>
<div className="right">
<div className="img-container">
<div className="img-stack top">
    <img src={react1} className="img" alt="true"/>
</div>
<div className="img-stack bottom">
    <img src={react2} className="img" alt="true"/>
</div>
</div>
</div>

    </div>
  )
}
