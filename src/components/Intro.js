import React from 'react'
//import { Link } from 'gatsby'
//import github from '../img/github-icon.svg'
import selfie from '../img/Layer_1.png'
//import logo from '../img/logo.svg'

const Intro = class extends React.Component {

 render() {
   return (

    <div className="container">
      <div style={{display: 'flex', flexDirection: 'row'}}>
      <img src={selfie} alt="Myself" style={{maxHeight: "100px", margin: '1rem'}} />
      <p style={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontStyle: 'italic'}}>
        Named after a column she used to write at the University of Guelph's student newspaper,
        Changing the Subject is a blog written by
        Danielle Subject. Her posts explore (but are not limited to) tech, music, beekeeping, and mental health.
      </p>
{/*        <div className="navbar-start has-text-centered">
          <span className="icon">
            <img src={myself} alt="Myself" />
          </span>
      </div> */}
       </div>
    </div>
  )}
}

export default Intro
