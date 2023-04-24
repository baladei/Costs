import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './components/pages/Home'
import { Contact } from './components/pages/Contact'
import { Company } from './components/pages/Company'
import { NewProject } from './components/pages/NewProject'
import { Container } from './components/layout/Container'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Projects } from './components/pages/Projects'
import { Project } from './components/pages/Project'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
    <Container customClass="min-height">
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/company' element={<Company />} />
      <Route path='/newproject' element={<NewProject />} />
      <Route path='/project/:id' element={<Project />} />
    </Routes>
    </Container>
    <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
