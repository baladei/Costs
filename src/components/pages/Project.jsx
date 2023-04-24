import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Loading } from '../layout/Loading'

import './Project.css'

export const Project = () => {

    const {id} = useParams()
    const [project, setProject] = useState([])

    useEffect(() => {

       setTimeout(() => {
        fetch(`http://localhost:5200/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json'
            },
        })
        .then((res) => res.json())
        .then((data) => {
            setProject(data)
        })
        .catch((err) => console.log(err))
    }, 500)
    }, [id])        

  return (
    <>
    {project.name ? <p>{project.name}</p> : <Loading />}
    </>
  )
}
