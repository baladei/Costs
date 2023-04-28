import { Input } from '../form/Input'
import { Submit } from '../form/Submit'
import '../project/ProjectForm.css'

export const ServiceForm = ({ handleSubmit, btnText, projectData }) => {

 // const [service, setService] = useState({})

  function submit (e) {
    e.preventDefault()
    projectData.services.push(service)
    handleSubmit(projectData)

  }

  function handleChange () {
    setService({...service, [e.target.name]: e.target.value})

  }

  return (
    <form onSubmit={submit} className='form'>
        <Input
        type='text'
        text='Nome do serviço'
        name='name'
        placeholder='Insira o nome do serviço'
        handleOnChange={handleChange}
        />
        <Input
        type='number'
        text='Custo do serviço'
        name='cost'
        placeholder='Insira o valor total'
        handleOnChange={handleChange}
        />
        <Input
        type='text'
        text='Descrição do serviço'
        name='description'
        placeholder='Escreva do serviço'
        handleOnChange={handleChange}
        />
        <Submit text={btnText} />

    </form>
  )
}
