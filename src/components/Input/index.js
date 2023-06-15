
export default function Input({ children, type, placeholder, description, required, margin, onInput, maxLength, value, error }) {

  const handleInput = (e) => {
    onInput &&
      onInput(e.target.value)
  }
  return (
    <div className={margin ? margin : 'my-6'}>
      {type == 'textArea' ?
        <textarea className="w-full custom-input" rows="5" placeholder={placeholder} />
        :
        <input className={`custom-input ${error && 'border-red-400 text-red-400 focus:outline-red-400'}`} type={type} placeholder={placeholder} required={required} value={value} onInput={event => handleInput(event)} maxLength={maxLength ? maxLength : ''} />}


      <div className={`ml-1 text-gray-500 ${error && 'text-red-400'} `}>
        {description}
        {
          required &&
            <span className="text-red-500"> *</span>
        }
      </div>
    </div>
  )
}