import './container.css'

export const Container = (props) => {
  return (
    <div className={`container ${props.customClass}`}>
      {props.children}
    </div>
  )
}
