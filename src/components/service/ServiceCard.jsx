import { BsFillTrashFill } from 'react-icons/bs'

import '../project/ProjectCard'

export const ServiceCard = ({ id, name, cost, description, handleRemove}) => {

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id, cost)
    }

  return (
    <div className='project_card'>
        <h4>{name}</h4>
        <p>
            <span>Custo total:</span> R${cost}
        </p>
        <p>{description}</p>
        <div className='project_card_actions'>
            <button onClick={remove}>
                <BsFillTrashFill />
                Excluir
            </button>
        </div>
    </div>
  )
}
