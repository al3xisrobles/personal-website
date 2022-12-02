import React, { useState, useEffect } from 'react';

import './css/Home.css'
import { AnimatePresence, motion } from "framer-motion";
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import About from '../components/About';

import LinkedIn from '../images/linkedin.png'
import Github from '../images/github.png'
import WhiteLogo from '../images/WhiteLogo.png'
import BlackLogo from '../images/BlackLogo.png'
import ColoredLogo from '../images/ColoredLogo.png'

function Home() {

  const [anchorTarget, setAnchorTarget] = useState(null);

  useEffect(() => {
    setAnchorTarget(document.getElementById('about'));
  }, []);

  const handleClick = event => {
    event.preventDefault();
    anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Scroll
  const [scrollPosition, setScrollPosition] = useState(0);
  const [menuOpacity, setMenuOpacity] = useState(0);
  const menuStartToFadeInY = 550;
  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
    setMenuOpacity(((window.pageYOffset - menuStartToFadeInY) * 3) / (menuStartToFadeInY));
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  const [menuPlaceholder, setPlaceholder] = useState(true);
  const [websiteTitle, setWebsiteTitle] = useState(false);
  const [websiteLogo, setWebsiteLogo] = useState(false);

  if (scrollPosition < menuStartToFadeInY && menuPlaceholder === true) {
    setPlaceholder(false);
  }

  const menuPlaceholderVariants = {
    menuPlaceholderMenu: { y: 50 },
    menuPlaceholderClose: { },
    closePlaceholderMenu: { y: 50 },
    closePlaceholderClose: { },
  }

    return (
        <>
          <div className='body'>

            {/* Northwestern BG */}
            <div className='bg'></div>

            {/* Navbar */}
            <nav role="navigation" className="top-nav">
              <motion.div className='website-title'
                initial={{ x: -150 }}
                animate={{ x: 0 }}
                transition={{ x: { duration: 0.6} }}
                onMouseEnter={() => setWebsiteLogo(!websiteLogo)}
                onMouseLeave={() => setWebsiteLogo(!websiteLogo)}
                tabIndex={1}
                aria-hidden="true">
                <a href="http://www.alexis-robles.com">
                <AnimatePresence>
                  {!websiteLogo &&
                  <img src={WhiteLogo} alt="alexis-robles.com"></img>
                  }
                  {websiteLogo &&
                  <img src={ColoredLogo} alt="alexis-robles.com"></img>
                  }
                </AnimatePresence>
                </a>
              </motion.div>
              <div className='list-of-contents'>
                <ul>
                  <li tabIndex={2}><a href="#about">// about me</a></li>
                  <li tabIndex={3}><a href="#skills">// skills</a></li>
                  <li tabIndex={4}><a href="#projects">// projects</a></li>
                  <li tabIndex={5}><a href="#contact">// contact</a></li>
                </ul>
              </div>
              <motion.div className='socials'
                initial={{ x: 150 }}
                animate={{ x: 0 }}
                transition={{ x: { duration: 0.6} }}>
                <a href="https://www.linkedin.com/in/alexisdrobles/" target="_blank" rel="noreferrer" tabIndex={6}>
                  <img src={LinkedIn} alt="LinkedIn"/>
                </a>
                <a href="https://github.com/al3xisrobles" target="_blank" rel="noreferrer" tabIndex={6}>
                  <img src={Github} alt="Github"/>
                </a>
              </motion.div>
            </nav>

            {/* Hero */}
            <section id='hero-section'>
              <div className='hero-text-wrapper'>
                <div className='hero-text'>
                  <div className='hero-title'>
                    <h1><span>HEY, </span><span>I'M </span><span>ALEXIS </span></h1>
                  </div>
                  <div className='hero-subtitle'>
                    <p>SOFTWARE ENGINEER AT NORTHWESTERN UNIVERSITY</p>
                  </div>
                  <a href="#skills" onClick={handleClick}>
                    <div className="bounce">
                      <i className="fa fa-angle-double-down"></i>
                    </div>
                  </a>
                </div>
              </div>
            </section>

            {/* Menu Button */}
            {scrollPosition >= menuStartToFadeInY &&
              <div className="menu" style={{ opacity: menuOpacity }}>
                <motion.p
                  onClick={() => setPlaceholder(!menuPlaceholder)}
                  className="menu-close"
                  animate={ menuPlaceholder ? "closePlaceholderMenu" : "closePlaceholderClose" }
                  variants={ menuPlaceholderVariants }
                  transition={{ y: { duration: 0.5} }}
                  aria-label="Close">
                    Close
                </motion.p>

                <motion.p
                  onClick={() => setPlaceholder(!menuPlaceholder)}
                  className="menu-menu"
                  animate={ menuPlaceholder ? "menuPlaceholderMenu" : "menuPlaceholderClose" }
                  variants={ menuPlaceholderVariants }
                  transition={{ y: { duration: 0.5} }}
                  aria-label="Menu">
                    Menu
                </motion.p>
              </div>
            }

            {/* Page Sections */}
            <div className="sections">
              <div className="cut-margins">
                <section id="about">
                  <About/>
                </section>
                <section id="skills">
                  <Skills/>
                </section>
                <section id="projects">
                  <Projects/>
                </section>
              </div>
              <section id="contact">
                <Footer/>
              </section>
            </div>

            {/* Menu Screen */}
            <AnimatePresence>
              {menuPlaceholder &&
                <>
                  <motion.div className="menu-slot left-menu-slot"
                    initial={{ y: window.innerHeight }}
                    animate={{ y: 0 }}
                    transition={{ y: { duration: 0.6} }}
                    exit={{ y: window.innerHeight }}>

                    <div className='left-slot-contents'>
                      <div className="menu-logo">
                        <a href="#"
                          onMouseEnter={() => setWebsiteTitle(!websiteTitle)}
                          onMouseLeave={() => setWebsiteTitle(!websiteTitle)}>
                          <img src={BlackLogo} alt="alexis-robles.com"/>
                          <AnimatePresence>
                            {websiteTitle &&
                            <div className="website-title-popout">
                              <motion.p
                                initial={{ x: -80 }}
                                animate={{ x: 40 }}
                                exit={{ x: -220 }}>
                                  alexis-robles.com
                              </motion.p>
                            </div>}
                          </AnimatePresence>
                        </a>
                      </div>

                      <div className="table-of-contents">
                        <motion.p onClick={() => setPlaceholder(!menuPlaceholder)}
                                  initial={{ x: -50,opacity: 0 }}
                                  whileInView={{ x: 0, opacity: 1, transition: {
                                    delay: 0
                                  }}}
                                  transition={{ opacity: { duration: 0.5 }, x: { duration: 0.3 }}}>
                                    <a href="#about" rel="noreferrer">About Me</a>
                        </motion.p>
                        <motion.p onClick={() => setPlaceholder(!menuPlaceholder)}
                                  initial={{ x: -50,opacity: 0 }}
                                  whileInView={{ x: 0, opacity: 1, transition: {
                                    delay: 0.03
                                  }}}
                                  transition={{ opacity: { duration: 0.5 }, x: { duration: 0.3 }}}>
                                    <a href="#skills" rel="noreferrer">Skills</a>
                        </motion.p>
                        <motion.p onClick={() => setPlaceholder(!menuPlaceholder)}
                                  initial={{ x: -50,opacity: 0 }}
                                  whileInView={{ x: 0, opacity: 1, transition: {
                                    delay: 0.06
                                  }}}
                                  transition={{ opacity: { duration: 0.5 }, x: { duration: 0.3 }}}>
                                    <a href="#projects" rel="noreferrer">Projects</a>
                        </motion.p>
                        <motion.p onClick={() => setPlaceholder(!menuPlaceholder)}
                                  initial={{ x: -50,opacity: 0 }}
                                  whileInView={{ x: 0, opacity: 1, transition: {
                                    delay: 0.09
                                  }}}
                                  transition={{ opacity: { duration: 0.5 }, x: { duration: 0.3 }}}>
                                    <a href="#content" rel="noreferrer">Contact Me</a>
                        </motion.p>
                      </div>

                      <div className="left-footer">
                        <p><strong>Alexis Robles</strong></p>
                        <p><a href="mailto:alexis.robles49@gmail.com">alexis.robles49@gmail.com</a></p>
                      </div>

                    </div>

                  </motion.div>

                  <motion.div className="menu-slot right-menu-slot"
                  initial={{ y: -window.innerHeight }}
                  animate={{ y: 0 }}
                  transition={{ y: { duration: 0.6} }}
                  exit={{ y: -window.innerHeight }}>

                    <div className='right-slot-contents'>
                      <div className='socials'>
                        <motion.div initial={{ x: 50, opacity: 0 }}
                                  whileInView={{ x: 0, opacity: 1, transition: {
                                    delay: 0.05
                                  }}}
                                  transition={{ opacity: { duration: 0.5 }, x: { duration: 0.3 }}}>
                          <div className="social-tags">
                            <p>&lt;</p>
                            <p className="linkedin-closing-bracket">/&gt;</p>
                          </div>
                          <p><a href="https://www.linkedin.com/in/alexisdrobles/" target="_blank" rel="noreferrer">linkedin</a></p>
                        </motion.div>
                        <motion.div initial={{ x: 50, opacity: 0 }}
                                  whileInView={{ x: 0, opacity: 1, transition: {
                                    delay: 0.1
                                  }}}
                                  transition={{ opacity: { duration: 0.5 }, x: { duration: 0.3 }}}>

                          <div className="social-tags">
                            <p>&lt;</p>
                            <p className="github-closing-bracket">/&gt;</p>
                          </div>
                          <p><a href="https://github.com/al3xisrobles" target="_blank" rel="noreferrer">github</a></p>
                        </motion.div>
                        <motion.div initial={{ x: 50, opacity: 0 }}
                                  whileInView={{ x: 0, opacity: 1, transition: {
                                    delay: 0.15
                                  }}}
                                  transition={{ opacity: { duration: 0.5 }, x: { duration: 0.3 }}}>

                          <div className="social-tags">
                            <p>&lt;</p>
                            <p className="insta-closing-bracket">/&gt;</p>
                          </div>
                          <p><a href="https://instagram.com/al3xisrobles" target="_blank" rel="noreferrer">instagram</a></p>
                        </motion.div>
                      </div>
                    </div>

                  </motion.div>
                </>
              }
            </AnimatePresence>
          </div>
        </>
    )
}

export default Home;
