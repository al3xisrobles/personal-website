import React from 'react'
import './css/Modal.css'
import { AnimatePresence, motion } from "framer-motion"
import Close from '../images/x.svg'

function Modal(props) {

  const assets = require('../assets.js')

  return (
    <>
      <motion.div className="modal"
        animate={{ opacity: [0, 1]}}
        transition={{ opacity: { duration: 0.3 }}}
        exit={{ opacity: 0 }}>

        <div className="modal-image">
          <img src={assets[props.imagePath]} alt=""/>
        </div>

        <div className="text-content">
          <div className="top-bar">
            <div className="modal-title">
              <p>{props.title}</p>
            </div>
            <div className="x-img">
              <img src={Close} alt="" onClick={props.handleClick}/>
            </div>
          </div>
          <div className="bottom-text">
            <div className="modal-text">
              <p>{props.text}</p>
            </div>
            <a className="modal-button-link" href={props.buttonSrc} target="_blank" rel="noreferrer">
              <div className="modal-button">
                <p>{props.buttonText}</p>
              </div>
            </a>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Modal
