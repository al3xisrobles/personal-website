import React from 'react'
import './css/SkillsBox.css'
import { motion } from "framer-motion"

function ExpertiseBox({title, delay, text}) {

  delay = parseFloat(delay);

  return (
    <>
      <motion.div className='swe expertise-box'
        initial={{ x: -50,opacity: 0 }}
        whileInView={{ x: 0, opacity: 1, transition: {
          delay: delay
        }}}
        transition={{ opacity: { duration: 0.5 }, x: { duration: 0.3 }}}>
        <div className='grid-item'>

          {/* Title */}
          <div className='grid-item-title'>
            <p>{title}</p>
          </div>

          {/* Top Left Decoration */}
          <div className="title-decor"></div>

          {/* Vertical Line Decoration */}
          <div className="vertical-line"></div>

          {/* Line Numbers */}
          <ul className="line-numbers">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>

          {/* Text */}
          <div className="text">
            <p>{text}</p>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default ExpertiseBox
