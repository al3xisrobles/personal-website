import React from 'react'
import './css/Experience.css'
import AWS from '../images/aws.png'

function Experience() {
  return (
    <>
      <div className="experience">
        <div className="title">
          <h1>&nbsp;&nbsp;My</h1>
          <h1>Experience</h1>
        </div>
        <div className="aws">
          <img src={AWS} alt=""/>
        </div>
      </div>
    </>
  )
}

export default Experience
