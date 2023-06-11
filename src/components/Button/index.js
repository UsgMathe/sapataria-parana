export default function Button({ children, icon, onClick }) {
  return (
    <button className="px-4 py-3 rounded-lg my-2 shadow-lg text-base transition-all duration-300  shadow-gray-400/40 bg-orange-500 hover:bg-orange-600 text-white" onClick={onClick}>
      <div className="flex justify-center">
        <div className={`${icon && 'mr-2'}`}>
          {icon && icon}
        </div>
        <p className="text-base">
          {children}
        </p>
      </div>
    </button>
  )
}