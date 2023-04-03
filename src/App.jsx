import { Home } from './components/pages/Home'
import { Contact } from './components/pages/Contact'
import { Company } from './components/pages/Company'
import { NewProject } from './components/pages/NewProject'
import { Link } from 'react-router-dom'
import { Container } from './components/layout/Container'

function App() {

  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/company'>Company</Link>
      <Link to='/newproject'>New Project</Link>
    </div>
  )
}

export default App
