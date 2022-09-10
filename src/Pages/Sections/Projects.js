import SectionTemplate from "./SectionTemplate"
import {Carousel, Card} from 'react-bootstrap';

function Projects(props) {
 

  return (
    <SectionTemplate motionKey="projects">
      
      <Carousel className="caro" slide={false} >
       <Carousel.Item>
       <Card className="m-2 " bg="transparent" style={{ width: '25rem' }}>
      <Card.Body>
        
        <Card.Title className="text-success"><h2>Gamers Haven</h2></Card.Title>
        
        <Card.Text><iframe  width="366" height="200" src="https://www.youtube.com/embed/_kktv9j4XP8"
          title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
          <strong>Description</strong><br />
           <p className='my-0'>Recipe generation app that helps all home cooks unlock their full potential!</p>
        </Card.Text>
        <Card.Text>
          <strong>Tech Used</strong><br />
          <p>React, Django, Django REST Framework, Postgres, AWS deployment</p>
        </Card.Text>
      </Card.Body>
    </Card>
      </Carousel.Item> 
      <Carousel.Item>
       <Card className="m-2 " bg="transparent" style={{ width: '25rem' }}>
      <Card.Body>
        
        <Card.Title className="text-success"><h2> Whip Up</h2> </Card.Title>
        
        <Card.Text>
          <iframe width="366" height="200" src="https://www.youtube.com/embed/Qjf0eixvhww"
          title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
          <strong>Description</strong><br />
           <p className='my-0'>Social platform for video gamers and anime fans to engage in discussion, poll topics and plan real world events!</p>
        </Card.Text>
        <Card.Text>
          <strong>Tech Used</strong><br />
          <p>React, Django, Django REST Framework, Postgres</p>
        </Card.Text>
      </Card.Body>
    </Card>
      </Carousel.Item> 
      
      </Carousel>
    
      
    </SectionTemplate>
  )
      }

export default Projects