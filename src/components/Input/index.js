
export default function Input({ children, type, placeholder, description, required, margin, onChange, maxLength, value, error }) {

  const handlechange = (e) => {
    onChange &&
      onChange(e)
  }
  return (
    <div className={margin ? margin : 'my-6'}>
      {type == 'textArea' ?
        <textarea name={description} className="w-full custom-input" rows="5" placeholder={placeholder} onChange={event => handlechange(event)} />
        :
        <input name={description} className={`custom-input ${error && 'border-red-400 text-red-400 focus:outline-red-400'}`} type={type} placeholder={placeholder} required={required} value={value} onChange={event => handlechange(event)} maxLength={maxLength ? maxLength : ''} />}


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