import { useEffect, useState } from 'react'

import { Input } from '../form/Input'
import { Select } from '../form/Select'
import { Submit } from '../form/Submit'

import './ProjectForm.css'

export const ProjectForm = ({ handleSubmit, btnText, projectData }) => {

  const [categories, setCategories] = useState([])
  const [project, setProject] = useState(projectData || {})

  useEffect(() => {
    fetch('http://localhost:5200/categories', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
})
  .then((res) => res.json())
  .then((data => {
    setCategories(data)
  }))
  .catch((err) => console.log(err))
  }, [])

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(project)
  }

  return (
    <form onSubmit={submit} className='form'>
        <Input
            type="text"
            text="Nome do projeto"
            name="name"
            placeholder="Insira o nome do projeto" />
        <Input
            type="number"
            text="Orçamento do projeto"
            name="budget"
            placeholder="Insira o orçamento total" />
        <Select
            name="category_id"
            text="Selecione a categoria"
            options={categories} />
        <Submit text={btnText} />
    </form>
  )
}
