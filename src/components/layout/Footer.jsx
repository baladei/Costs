import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import './Footer.css'

export const Footer = () => {
  return (
    <footer className='footer'>
      <ul className='socialList'>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
      <p className='copyRight'>
        <span>Costs</span> &copy; 2023
      </p>
    </footer>
  )
}
