import React, { useState } from 'react'
import './css/Projects.css'
import Card from './Card'
import { motion } from "framer-motion"
import Modal from './CardModal'

function Projects() {

  const [firstOpened, setFirstOpened] = useState(false);
  const [secondOpened, setSecondOpened] = useState(false);

  return (
    <>
      <div className="projects">

        {(firstOpened || secondOpened) &&
          <div className="close-wrap" onClick={() => firstOpened ? setFirstOpened(!firstOpened) : setSecondOpened(!secondOpened)}></div>
        }

        {/* Modal */}
        <div className="modal-wrapper">
          {firstOpened && !secondOpened &&
            <Modal title="Neural Networks on Remote Planetary Surfaces"
            imagePath = {'sip'}/>}
          {secondOpened && !firstOpened &&
            <Modal title="Live Philanthropic Volleyball Tournament Bracket"
            imagePath = {'tournament'}/>}
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
          <motion.div onClick={() => setFirstOpened(!firstOpened)}
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ opacity: { duration: 0.5 }, x: { duration: 0.3 }}}>
            <Card imagePath = {'sip'}
                title="Neural Networks on Remote Planetary Surfaces"
                subject="Artificial Intelligence"
                x="50"
                y="50"/>
          </motion.div>

          <motion.div onClick={() => setSecondOpened(!secondOpened)}
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
