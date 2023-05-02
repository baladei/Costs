import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { parse, v4 as uuidv4 } from 'uuid'

import { Loading } from '../layout/Loading'
import { Container } from '../layout/Container'
import { Message } from '../layout/Message'
import { ProjectForm } from '../project/ProjectForm'
import { ServiceForm } from '../service/ServiceForn'

import './Project.css'

export const Project = () => {

    const {id} = useParams()
    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)
    const [message, setMessage] = useState('')
    const [type, setType] = useState('sucess')

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
        setShowProjectForm(!setShowProjectForm) //or(false)
        setMessage('Projeto atualizado!')
        setType('sucess')
      })
      .catch((err) => console.log(err))
    }

    function createService (project) {
      const lastService = project.services[project.services.length -1] //-1 serve para ir pro projeto atual, ou seja, o último

      lastService.id = uuidv4();

      const lastServiceCost = lastService.cost
      
      const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

      //maximum value validation

      if(newCost > parseFloat(project.budget)) {
      setMessage('Orçamento ultrapassado, verifique o valor do serviço')
      setType('error')
      setTimeout(() => {setMessage('')}, 3000);
      project.services.pop()
      return false
    }

    //add service cost to project total cost

    project.cost = newCost

    //update project

    fetch(`http://localhost:5200/projects/${project.id}`, {
      method:'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project)
    })
      .then((res) => res.json())
      .then((data) => {
        //exibir serviços
        console.log(data)
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
            {showServiceForm && (
              <ServiceForm
                handleSubmit={createService}
                btnText="Adicionar Serviço"
                projectData={project}
              />
            )}
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
