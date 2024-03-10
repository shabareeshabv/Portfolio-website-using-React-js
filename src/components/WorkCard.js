import "./WorkCardStyle.css"

import React from 'react'
import pro1  from "../assets/Images/img2.jpg"
import { NavLink } from "react-router-dom"

export const WorkCard = (props) => {
  return (
    <div className="project-card">

            <img src={props.imgsrc} alt="image"/>
            <h2 className="project-title"> {props.Title}</h2>
            <div className="pro-details">
            <p> {props.text}</p>
            <div className="pro-btns">
            <NavLink to={props.view} className="btn" >View</NavLink>
            <NavLink to={props.view} className="btn" >Source</NavLink>
            </div>
            </div>
            </div>
  )
}
