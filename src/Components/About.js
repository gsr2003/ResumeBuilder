import React from 'react'
import "./About.css"

function About() {
  return (
    <>
      <div className='about-head'>About</div>
      <div className='about'>
        This is react resume builder made by Gourav Rathore. This project is made by using complete React.js with poppular
        react packages like react-redux, redux-persist, react-hook-form, react-router-dom, react-icons
        and Nhost services like Postgres Database, GraphQl API and Storage has been used.

    
        <a className={"mt-2 anchor-link"} href={"https://github.com/gsr2003"} target="_blank" rel="noopener noreferrer">Github account</a>
        
      </div>
    </>
  )
}

export default About