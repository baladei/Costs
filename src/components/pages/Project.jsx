import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Loading } from '../layout/Loading'
import { Container } from '../layout/Container'
import { Message } from '../layout/Message'
import { ProjectForm } from '../project/ProjectForm'

import './Project.css'

export const Project = () => {

    const {id} = useParams()
    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState()

    useEffect(() => {

       setTimeout(() => {
        fetch(`http://localhost:5200/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json'
            },
        })
        .then((res) => res.json())
        .then((data) => {
            setProject(data)
        })
        .catch((err) => console.log(err))
    }, 500)
    }, [id])

    function editPost(project) {
      setMessage('')
      //budget validation
      if(project.budget < project.cost) {
        setMessage('O orçamento não pode ser menor que o custo do projeto!')
        setType('error')
        return false
      }

      fetch(`http://localhost:5200/projects/${project.id}`, {
        method: "PATCH",
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(project),
      })
      .then((res) => res.json())
      .then((data) => {
        setProject(data)
        setShowProjectForm(false)
        setMessage('Projeto atualizado!')
        setType('sucess')
        return false
      })
      .catch((err) => console.log(err))
    }
    
    function toggleProjectForm () {
      setShowProjectForm(!showProjectForm)
    }

    function toggleServiceForm () {
      setShowServiceForm(!showServiceForm)
    }


  return (
    <>
    {project.name ? (
      <div className='project_details'>
      <Container customClass='column'>
        {message && <Message type={type} msg={message} />}
        <div className='details_container'>
          <h1>Projeto: {project.name}</h1>
          <button className='button' onClick={toggleProjectForm}>
            {!showProjectForm ? 'Editar projeto' : 'Salvar'}
          </button>
          {!showProjectForm ? (
            <div className='project_info'>
              <p>
                <span>Categoria:</span> {project.category.name}
              </p>
              <p>
                <span>Orçamento:</span> R${project.budget}
              </p>
              <p>
                <span>Total Utilizado:</span> R${project.cost}
              </p>
            </div>
          ) : (
            <div className='project_info'>
              <ProjectForm handleSubmit={editPost} btnText='Concluir edição' projectData={project} />
            </div>
          )}
        </div>
        <div className='service_form_container'>
          <h2>Adicione um serviço:</h2>
          <button className='button' onClick={toggleServiceForm}>
            {!showServiceForm ? 'Adicionar serviço' : 'Salvar'}
          </button>
          <div className="project_info">
            {showServiceForm && <div>formulário de serviço</div>

            }
          </div>
        </div>
        <h2> Serviços</h2>
        <Container customClass='start'>
          <p>Itens de serviços</p>
        </Container>

      </Container>
    </div>
    ) : (<Loading />)}
    </>
  )
}
