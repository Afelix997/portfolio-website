import { Container, Row } from "react-bootstrap";
import NavBar from "../Components/NavBar";
import Intro from "./Sections/Intro";
import SkillsAndCerts from "./Sections/SkillsAndCerts";
import Projects from "./Sections/Projects"
import Contact from "./Sections/Contact"
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useRef } from "react"

function Home(props) {

  
  const location = useLocation()
  const isFirstRender = useFirstRender()
  const paths = ['/', '/about-me', '/skills-and-certs', '/projects', '/contact-me']

  

  function useFirstRender() {
  const render = useRef(true)
  const isFirstRender = render.current
  render.current = false
  return isFirstRender
}

  return (
    <Container>
      <NavBar />
      <Row style={{ height: '80vh', overflow: 'hidden',justifyContent:'center' }}>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Intro isFirstRender={isFirstRender} location={location} paths={paths} />} />
            <Route path="/skills-and-certs" element={<SkillsAndCerts location={location} paths={paths} />} />
            <Route path="/projects" element={<Projects location={location} paths={paths} />} />
            <Route path="/contact-me" element={<Contact location={location} paths={paths} />} />
          </Routes>
        </AnimatePresence>
        
      </Row>
    </Container>
  )
}

export default Home