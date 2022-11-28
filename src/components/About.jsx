import React from 'react'
import './css/About.css'
import { motion } from 'framer-motion'

function About() {
  return (
    <>
      <div className="about-me">
        <div className="gradient">
          <svg viewBox="0 0 1459 1448" version="1.1" xmlns="http://www.w3.org/2000/svg" >
            <defs>
                <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="50%" gradientTransform="translate(0.500000,0.500000),rotate(90.000000),scale(1.000000,0.970490),translate(-0.500000,-0.500000)" id="radialGradient-ij9jc35_du-1">
                    <stop stop-color="#00A4FF" offset="0%"></stop>
                    <stop stop-color="#8D51E7" offset="29.8541302%"></stop>
                    <stop stop-color="#101010" stop-opacity="0" offset="100%"></stop>
                </radialGradient>
                <filter x="-9.5%" y="-9.5%" width="119.0%" height="119.0%" filterUnits="objectBoundingBox" id="filter-ij9jc35_du-2">
                    <feGaussianBlur stdDeviation="50" in="SourceGraphic"></feGaussianBlur>
                </filter>
            </defs>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.450404576">
                <path d="M-175,76 L1406,76 L1406,1657 C923.516156,1055.12721 537.627333,754.190808 248.33353,754.190808 C-40.9602727,754.190808 90.6250302,682.807178 643.089439,540.039918 L-175,76 Z" id="Rectangle-Copy" fill="url(#radialGradient-ij9jc35_du-1)" filter="url(#filter-ij9jc35_du-2)"></path>
            </g>
          </svg>
        </div>

        {/* Title */}
        <div className="about-title">
          <motion.h1 initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { delay: 0 }}} transition={{ opacity: { duration: 0.5 }, x: { duration: 0.5 }}}>
          About
          </motion.h1>
          <motion.p initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { delay: 0 }}} transition={{ opacity: { duration: 0.5 }, x: { duration: 0.5 }}}>
          Me, Myself, & I
          </motion.p>
        </div>

        {/* Text */}
        <div className="about-text">
          <motion.p initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { delay: 0 }}} transition={{ opacity: { duration: 0.5 }, x: { duration: 0.5 }}}>
          I'm a current second-year studying at Northwestern University located in Evanston, IL. I have a <strong>goal of</strong> creating scalable software that <strong>drives human progress</strong> and reduces adversity.
          </motion.p>

          <motion.p initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { delay: 0 }}} transition={{ opacity: { duration: 0.5 }, x: { duration: 0.5 }}}>
          An <strong>algorithmic, disciplined, and ambitious</strong> problem solver who takes ownership in his work as well as his clean room. When I'm not cleaning my room, you might see me playing with my band, traveling, editing film, or creating graphic designs.
          </motion.p>

          <motion.p initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { delay: 0 }}} transition={{ opacity: { duration: 0.5 }, x: { duration: 0.5 }}}>
          Excited to use my pleasant personability to work with a positive team. <span><a href="#contact" tabIndex={6}>Let's create something great.</a></span>
          </motion.p>
        </div>
      </div>
    </>
  )
}

export default About
