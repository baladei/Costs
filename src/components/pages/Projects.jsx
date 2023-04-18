import { useLocation } from 'react-router-dom'
import { Message } from '../layout/Message'
import { Container } from '../layout/Container'
import { LinkButton } from '../layout/LinkButton'
import { ProjectCard } from '../project/ProjectCard'

import { useEffect, useState } from 'react'
import './Projects.css'

export const Projects = () => {

  const [projects, setProjects] = useState([])

  const location = useLocation()
  let message = ''
  if(location.state) {
    message = location.state.message
  }

  useEffect (() => {

    fetch('http://localhost:5200/projects', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
     },
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      setProjects(data)
    })
    .catch((err) => console.log(err))

  }, [])

  return (
    <div className='project_container'>
      <div className='title_container'>
        <h1>Meus Projetos</h1>
      <LinkButton to="/newproject" text="Criar Projeto" />
      </div>
      {message && <Message type="sucess" msg={message} />}
      <Container customClass='start'>
        {projects.length > 0 &&
        projects.map((project) => (
          <ProjectCard name={project.name} key={project.name} />
        ))}
      </Container>
    </div>
  )
}
