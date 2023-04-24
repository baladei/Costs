import './Projects.css'

import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Message } from '../layout/Message'
import { Container } from '../layout/Container'
import { LinkButton } from '../layout/LinkButton'
import { ProjectCard } from '../project/ProjectCard'
import { Loading } from '../layout/Loading'


export const Projects = () => {

  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [projectMessage, setProjetcMessage] = useState('')

  const location = useLocation()
  let message = ''
  if(location.state) {
    message = location.state.message
  }

  useEffect (() => {

  setTimeout(() => {
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
      setLoading(false)
    })
    .catch((err) => console.log(err))
  }, 500)
  }, [])

  function removeProject (id) {

    fetch(`http://localhost:5200/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type' : 'application/json'
      },
    })
    .then((res) => res.json())
    .then(() => {
      setProjects(projects.filter((project) => project.id !== id))
      setProjetcMessage('Projeto removido com sucesso!')
    })
    .catch((err) => console.log(err))
  }


  return (
    <div className='project_container'>
      <div className='title_container'>
        <h1>Meus Projetos</h1>
      <LinkButton to="/newproject" text="Criar Projeto" />
      </div>
      {message && <Message type="sucess" msg={message} />}
      {projectMessage && <Message type="sucess" msg={projectMessage} />}
      <Container customClass="start">
        {projects.length > 0 &&
        projects.map((project) => (
          <ProjectCard
          id={project.id}
          name={project.name}
          key={project.id}
          budget={project.budget}
          category={project.category.name}
          handleRemove={removeProject}
          />
        ))}
        {loading && <Loading />}
        {!loading && projects.length === 0 &&(
          <p>Não há projetos cadastrados</p>
        )}
      </Container>
    </div>
  )
}
