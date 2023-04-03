import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './components/pages/Home'
import { Contact } from './components/pages/Contact'
import { Company } from './components/pages/Company'
import { NewProject } from './components/pages/NewProject'
import { Container } from './components/layout/Container'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    <Container>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/contact' element={<Contact />} />
      <Route exact path='/company' element={<Company />} />
      <Route exact path='/newproject' element={<NewProject />} />
    </Routes>
    </Container>
    <p>Footer</p>
    </BrowserRouter>
  </React.StrictMode>,
)
