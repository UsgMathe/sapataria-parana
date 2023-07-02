"use client"

export default function Dropdown({ children, description, required, onChange }) {
  return (
    <div className="my-6">
      <select name={description} required={required} className=" custom-input bg-white" onChange={e => onChange(e)}>
        <option value="" className="hidden text-gray-500">Selecione</option>
        {children.map((option) =>
          <option key={option} value={option}>{option}</option>
        )}
      </select>
      <p className="mt-1 ml-1 text-gray-500">{description}</p>
    </div>
  )
}