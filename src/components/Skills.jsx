import React from 'react'
import './css/Skills.css'
import { motion } from 'framer-motion'
import Resume from './ResumeButton'
import SkillsBox from './SkillsBox'

function Expertise() {
 return (
  <>
    <div className="skills">

      <motion.div className="title"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 1, opacity: 1 }}
        transition={{ opacity: { duration: 0.5 }, x: { duration: 0.3 }}}>
        <p>My Skills NEW</p>
        <div className="orange-underline"></div>
      </motion.div>

      <motion.div className="expertise-grid"
        initial={{ x: -50,opacity: 0 }}
        whileInView={{ x: 0, opacity: 1, transition: {
          delay: 0
        }}}
        transition={{ opacity: { duration: 0.5 }, x: { duration: 0.3 }}}>

        <SkillsBox className="swe"
                    title="Software Engineering"
                    delay="0"
                    text="Experienced in object-oriented and functional programming with Python, Java, C, C++, Racket, and MATLAB."
                    aria-colindex="1"/>

        <SkillsBox className="frontend"
                    title="Frontend and UI/UX Design"
                    delay="0.03"
                    text="Versed in HTML, CSS, JS, and the React.js framework. Passionate about graphic design with 3 years of professional experience."
                    aria-colindex="2"/>

        <SkillsBox className="cloud"
                    title="Cloud Infrastructure"
                    delay="0.06"
                    text="Skilled in designing and implementing AWS cloud infrastructure architecture; learned from my time as an AWS SDE intern."
                    aria-colindex="3"/>

        <SkillsBox className="ai"
                    title="Artificial Intelligence"
                    delay="0.09"
                    text="Able to aquire and analyze data and create neural networks that facilitate autonomous decision-making."
                    aria-colindex="4"/>
      </motion.div>

      <motion.div className="resume-button"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ opacity: { duration: 0.5 }, x: { duration: 0.3 }}}
        tabIndex={7}>
          <Resume/>
      </motion.div>
    </div>
  </>
 )
}

export default Expertise;
