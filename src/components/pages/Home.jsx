import './Home.css'
import savings from '../../img/savings.svg'
import { LinkButton } from '../layout/LinkButton'

export const Home = () => {
  return (
    <section className='homeContainer'>
      <h1>Bem-vindo ao <span>Costs</span></h1>
      <p>Comece a gerenciar os seus projetos agora mesmo!</p>
      <LinkButton to="/newproject" text="Criar Projeto" />
      <img src={savings} alt="Costs" />
    </section>
  )
}
