import SectionTemplate from "./SectionTemplate"

function Intro(props) {




  return (

    <SectionTemplate motionKey="intro" {...props}>
      <h1>Hello, I'm <strong className="text-primary">Angel Felix</strong>, <br /> and I'm a Fullstack Developer</h1>
      <hr className="my-4" />
      <br/><br/><br/><br/><br/><br/><br/><br/>
      <p className="text-success">Highly Motivated Marine Corps Veteran transitioning into the field of software engineering. Having experienced time as a aircraft mechanic with over 4 years of on aircraft military experience in diagnosing, repairing, and overhauling F-35 Lightning II engines and it's related propulsion system. Along with over a year as a SpaceX propulsion technician working on the Starship Raptor engine. I have decided to pursue my dream of helping sculpt the vast greatness of the internet with revolutionary products and experiences.</p>
    </SectionTemplate>
  )

}

export default Intro