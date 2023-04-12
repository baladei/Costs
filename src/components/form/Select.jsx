import './Select.css'

export const Select = ({text, name, options, handleOnChange, value}) => {
  return (
    <div className='formControl'>
        <label htmlFor={name}>{text}:</label>
        <select name={name} id={name} onChange={handleOnChange} value={value || ''}>
          <option>Selecione uma opção</option>
          {options.map((option) => (
            <option value={option.id} key={option.id}>{option.name}</option>
          ))}
        </select>
    </div>
  )
}
