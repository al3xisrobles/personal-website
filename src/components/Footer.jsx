import React from 'react'
import './css/Footer.css'
import Headshot from '../images/composite.PNG'
import { motion } from 'framer-motion'

function Footer() {
  return (
    <>
      <div className="footer">

        {/* Left Side */}
        <div className="left-side">

          <div className="top-contents">
            {/* Header */}
            <div className="footer-header">
              <motion.h1 initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { delay: 0 }}} transition={{ opacity: { duration: 0.5 }, y: { duration: 0.3 }}}>
              Available for Internship
              </motion.h1>
              <motion.p initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { delay: 0 }}} transition={{ opacity: { duration: 0.5 }, y: { duration: 0.3 }}}>
              Summer 2024
              </motion.p>
            </div>

            {/* Caption */}
            <div className="caption">
              <motion.p initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { delay: 0 }}} transition={{ opacity: { duration: 0.5 }, y: { duration: 0.3 }}}>
              Have an exciting project or inquiry? Feel free to reach out!
              </motion.p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="right-side">

          {/* Socials */}
          <div className="socials">

            {/* Email */}
            <motion.div className="motion-div" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { delay: 0 }}} transition={{ opacity: { duration: 0.5 }, y: { duration: 0.3 }}}>
              <a className="anchor" href="mailto:alexis.robles49@gmail.com" target="_blank" rel="noreferrer">
                <div className='btn email'>
                  <p>alexis.robles49@gmail.com</p>
                  <div className="decor email-decor"></div>
                </div>
              </a>
            </motion.div>

            {/* LinkedIn */}
            <motion.div className="motion-div" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { delay: 0.02 }}} transition={{ opacity: { duration: 0.5 }, y: { duration: 0.3 }}}>
              <a className="anchor" href="https://www.linkedin.com/in/alexisdrobles/" target="_blank" rel="noreferrer">
                <div className='btn linkedin'>
                  <p>linkedin</p>
                  <div className="decor linkedin-decor"></div>
                </div>
              </a>
            </motion.div>

            {/* GitHub */}
            <motion.div className="motion-div" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { delay: 0.04 }}} transition={{ opacity: { duration: 0.5 }, y: { duration: 0.3 }}}>
              <a className="anchor" href="https://github.com/al3xisrobles" target="_blank" rel="noreferrer">
                <div className='btn github'>
                  <p>github</p>
                  <div className="decor github-decor"></div>
                </div>
              </a>
            </motion.div>

            {/* Instagram */}
            <motion.div className="motion-div" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { delay: 0.06 }}} transition={{ opacity: { duration: 0.5 }, y: { duration: 0.3 }}}>
              <a className="anchor" href="https://instagram.com/al3xisrobles" target="_blank" rel="noreferrer">
                <div className='btn insta'>
                  <p>instagram</p>
                  <div className="decor insta-decor"></div>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
