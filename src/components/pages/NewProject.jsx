//import { useHistory } from 'react-router-dom'

import { ProjectForm } from '../project/ProjectForm'
import './NewProject.css'

export const NewProject = () => {

  //const history = useStory()

  function createPost(project) {

    // initialize costs and services
    project.cost = 0
    project.services = []

    fetch('http://localhost:5200/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project)
    },[])
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      //redirect
    })
    .catch(err => console.log(err))
    
  }

  return (
    <div className="newProject">
      <h1>Criar Projeto</h1>
      <p>Cria seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  )
}
