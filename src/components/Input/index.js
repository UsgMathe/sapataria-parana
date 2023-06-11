
export default function Input({ children, type, placeholder, description, required, margin, onInput, maxLength, value, error }) {

  const handleInput = (e) => {
    onInput &&
      onInput(e.target.value)
  }
  return (
    <div className={margin ? margin : 'my-6'}>
      {type == 'textArea' ?
        <textarea className="w-full custom-input" cols="30" rows="10" placeholder={placeholder} ></textarea>
        :
        <input className={`custom-input ${error && 'border-red-400 text-red-400 focus:outline-red-400'}`} type={type} placeholder={placeholder} required={required} value={value} onInput={event => handleInput(event)} maxLength={maxLength ? maxLength : ''} />}


      <p className={`mt-1 ml-1 text-gray-500 ${error && 'text-red-400'} `}>{description}</p>
    </div>
  )
}