import React, { useState } from 'react'
import './css/Projects.css'
import Card from './Card'
import { AnimatePresence, motion } from "framer-motion"
import Modal from './Modal'

function Projects() {

  const [firstOpened, setFirstOpened] = useState(false);
  const [secondOpened, setSecondOpened] = useState(false);

  function openClose(option) {
    if (firstOpened || secondOpened) {
      setFirstOpened(false);
      setSecondOpened(false);
    } else {
      if (option === 1) {
        setFirstOpened(true);
      } else {
        setSecondOpened(true);
      }
    }
  }

  return (
    <>
      <div className="projects">

        {(firstOpened || secondOpened) && <div className="close-wrap" onClick={() => firstOpened ? openClose(1) : openClose(2)}></div>}

        {/* Modal */}
          <div className="modal-wrapper">
            {firstOpened && !secondOpened &&
              <Modal title="Neural Networks on Remote Planetary Surfaces"
              imagePath={'sip'}
              handleClick={() => openClose(1)}
              text="NASA's Mars 2020 mission has sent a suite of cameras and Raman spectrometers (of relevance: SuperCam, SHERLOC, MastCam-Z, and the Remote Micro-Imager) aboard the Perseverance rover to the surface of Mars. These instruments generate large spectral and imaging datasets ripe for analyses with the aid of artificial neural networks. Machine learning methods facilitate autonomous rover decision-making on Mars, and improve and expedite scientific analysis on Earth, saving valuable mission resources. My team presents a lightweight multi-layer perceptron (MLP) and its standardized training dataset as a quick and accurate means of rock and mineral classification using images and spectra, either separately or in conjunction."
              buttonSrc="https://drive.google.com/file/d/1jV1F0A4wqArL8w1Qx5_OdbR654xvup3o/view?usp=sharing"
              buttonText="Read the Poster"/>}
            {secondOpened && !firstOpened &&
              <Modal title="Live Philanthropic Volleyball Tournament Bracket"
              imagePath={'tournament'}
              handleClick={() => openClose(2)}
              text="Collaborated with a partner through git to create both a unique registration website for events that shows current participants and
              a dynamic bracket UI for live user experience during a philanthropic volleyball tournament with React.js and Flask. Pictured to the left is the live bracket that participants of the tournament could visit on their mobile phone live to see how their team is doing. The web app was connected to a Microsoft Excel sheet that was updated as the tournament went on."
              buttonSrc="https://github.com/al3xisrobles/Live-Tournament-Tracker"
              buttonText="Project Repo"/>}
          </div>

        {/* Title */}
        <motion.div className="proj-title"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ opacity: { duration: 0.5 }, x: { duration: 0.3 }}}>
          <h1>My Projects</h1>
        </motion.div>

        {/* Cards */}
        <div className="cards">
          <motion.div onClick={() => openClose(1)}
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ opacity: { duration: 0.5 }, x: { duration: 0.3 }}}>
            <Card imagePath = {'sip'}
                title="Neural Networks on Remote Planetary Surfaces"
                subject="Artificial Intelligence"
                x="50"
                y="50"/>
          </motion.div>

          <motion.div onClick={() => openClose(2)}
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: {
              delay: 0.1
            }}}
            transition={{ opacity: { duration: 0.5 }, x: { duration: 0.3 }}}
            >
            <Card imagePath = {'tournament'}
                title="Live Philanthropic Volleyball Tournament Bracket"
                subject="Web Development"
                x="50"
                y="50"/>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Projects
