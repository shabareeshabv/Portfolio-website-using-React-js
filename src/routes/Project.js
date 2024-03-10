import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import Heroimg2 from '../components/Heroimg2' // Assuming Heroimg2 is exported as default
import { PricingCard } from '../components/PricingCard'
import Work from '../components/Work'; 

export const Project = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="PROJECTS" text="some of my most recent works"/>
      <Work/>
      <PricingCard/>
      <Footer/>
    </div>
  )
}
