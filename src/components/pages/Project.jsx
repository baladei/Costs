import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Loading } from '../layout/Loading'
import { Container } from '../layout/Container'

import './Project.css'

export const Project = () => {

    const {id} = useParams()
    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)

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
    
    function toggleProjectForm () {
      setShowProjectForm(!showProjectForm)
    }

  return (
    <>
    {project.name ? (
      <div className='project_details'>
      <Container customClass='column'>
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
              <p>FORM</p>
            </div>
          )}
        </div>

      </Container>
    </div>
    ) : (<Loading />)}
    </>
  )
}
