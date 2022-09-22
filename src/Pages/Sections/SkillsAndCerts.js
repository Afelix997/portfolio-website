import SectionTemplate from "./SectionTemplate"
import { skillData } from "../../RenderData/SkillsData"
import { Row } from "react-bootstrap"

function SkillsAndCerts(props) {

  const renderSkills = () => {
    return skillData.map((skill, index) => {
      return (
        <div key={"" + skill.name + index} style={{ display: 'inline-block', width: '20%' }}>
          <img style={{ width: '5rem' }} src={skill.icon} alt='skill logo' />
          <p>{skill.title}</p>
        </div>
      )
    })
  }

 

  return (
    <SectionTemplate motionKey="skillsAndCerts">
      <Row justify-content-center>
        
          {skillData && renderSkills()}
        
      </Row>
    </SectionTemplate>
  )
}

export default SkillsAndCerts