import SectionTemplate from "./SectionTemplate"

function Contact(props) {



  return (
    <SectionTemplate motionKey="contact">
        <div className='d-flex justify-content-around align-items-center'>
          
          <a href='https://www.linkedin.com/in/angelfelix1997/' target='_blank'>
            <img className="mx-4" src="linkedinIcon.png" alt="linked in icon" style={{ width:'8.7rem', height: '8.2rem'  }} />
          </a>
          <a href="mailto: afelix2013@gmail.com?subject=Hello, Angel!" target="_blank" rel="noreferrer" >
            <img className="mx-4" src="env.png" alt="linked in icon" style={{width:'9.0rem', height: '10.0rem'  }} />
          </a>
          <a href='https://github.com/Afelix997' target='_blank'>
            <img className="mx-4 my-3" src="githubIcon.png" alt="github icon" style={{ width:'10rem', height: '9.5rem' }} />
          </a>
        </div>
    </SectionTemplate>
  )
}

export default Contact