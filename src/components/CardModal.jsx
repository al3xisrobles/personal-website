import React from 'react'
import './css/CardModal.css'
import { motion } from "framer-motion"

function CardModal(props) {

  const assets = require('../assets.js')

  return (
    <>
      <motion.div className="modal"
        animate={{ y: [window.innerHeight, 50]}}
        transition={{ y: { duration: 0.3 }}}>

        <div className="modal-image">
          <img src={assets[props.imagePath]} alt=""/>
        </div>

        <div className="modal-title">
          <p>{props.title}</p>
        </div>
      </motion.div>
    </>
  )
}

export default CardModal
