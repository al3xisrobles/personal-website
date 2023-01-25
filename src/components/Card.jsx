import React from 'react'
import './css/Card.css'

function Card(props) {

  const assets = require('../assets.js')
  const pos = props.x + props.y;

  return (
    <>
      {/* Card */}
      <div className="card">
        <div className="img-section">
          <img src={assets[props.imagePath]} alt="" style={{ objectPosition: pos }}/>
        </div>

        <div className="text-section">
          <div className="title-section">
            <p>{props.title}</p>
          </div>

          <div className="subj-section">
            <p>{props.subject}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card;
