import Image from "next/image"

export default function Button({ children, icon, onClick }) {
  return (
    <button className="px-3 py-2 rounded-lg my-2 shadow-lg text-base transition-all duration-300 hover:scale-95 shadow-gray-400/40 bg-orange-500 hover:bg-orange-600 text-white" onClick={onClick}>
      <div className="flex justify-center">
        <div className={`${icon && 'mr-2'}`}>
          {icon && <img src={icon} className='mt-[3px] h-3/4' />}
        </div>
        <p className="text-lg">
          {children}
        </p>
      </div>
    </button>
  )
}