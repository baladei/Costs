import { Link } from 'react-router-dom'
import './ProjectCard.css'

import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

export const ProjectCard = ({id, name, budget, category, handleRemove}) => {

  const remove = (e) => {
    e.preventDefault()
    handleRemove(id)
  }

  return (
    <div className='project_card'>
      <h4>{name}</h4>
      <p>
        <span>Orçamento:</span> R${budget}
      </p>
      <p className='category_text'>
        <span className={[category.toLowerCase()]}></span> {category} 
        {/* para colorir a bolinha, transformo tudo em letra minuscula para achar na {category} */}
      </p>
      <div className='project_card_actions'>
        <Link to={`/project/${id}`}>
          <BsPencil /> Editar
        </Link>
        <button onClick={remove}>
          <BsFillTrashFill /> Excluir
        </button>
      </div>
    </div>
  )
}
