"use client"

export default function Dropdown({ children, description, required }) {
  return (
    <div className="my-6">
      <select required={required} className=" custom-input bg-white" name="" id="">
        <option value="" className="hidden text-gray-500">Selecione</option>
        {children.map((option) =>
          <option key={option} value={option}>{option}</option>
        )}
      </select>
      <p className="mt-1 ml-1 text-gray-500">{description}</p>
    </div>
  )
}