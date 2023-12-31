import Image from "next/image"

export default function Button({ children, icon, onClick }) {
  return (
    <button className="px-3 py-2 rounded-lg my-2 shadow-lg text-base transition-all duration-300 hover:scale-95 shadow-gray-400/40 bg-orange-500 hover:bg-orange-600 text-white w-full" onClick={onClick}>
      <div className="flex justify-center">
        <div className={`${icon && 'mr-2'} flex flex-col items-center justify-center text-2xl`}>
          {icon && icon}
        </div>
        <div className="text-lg">
          {children}
        </div>
      </div>
    </button>
  )
}