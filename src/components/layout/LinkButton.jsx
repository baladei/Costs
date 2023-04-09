import { Link } from 'react-router-dom'
import './LinkButton.css'

export const LinkButton = ({to, text}) => {
  return (

    <Link className="button" to={to}>
        {text}
    </Link>
  )
}
