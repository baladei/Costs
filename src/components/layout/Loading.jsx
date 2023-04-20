import './Loading.css'
import loading from '../../img/loading.svg'

export const Loading = () => {
  return (
    <div className='loader_container'>
        <img src={loading}  className='loader' alt="Loading" />
    </div>
  )
}
