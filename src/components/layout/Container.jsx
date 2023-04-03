import './container.css'

export const Container = (props) => {
  return (
    <div className='container min-height'>
      {props.children}
    </div>
  )
}
