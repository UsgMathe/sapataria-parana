import Button from "../Button"

export default function ProductCard({ nome, imagem, descricao, preco }) {
  return (
    <div key={nome} className="flex flex-col rounded-lg border-2  bg-slate-100 hover:scale-95 hover:border-orange-500 transition-all duration-300">
      <div className={`h-2/3`}>
        <img src={imagem}
          className="m-auto rounded-lg object-cover w-full h-full  transition-all duration-300"
        />
      </div>
      <p className="m-2 line-clamp-1 text-center font-semibold text-gray-900">{nome}</p>
      <p className="line-clamp-2 text-center font-normal text-gray-700">{descricao}</p>
      <p className="mt-2 text-center text-xl font-medium text-orange-500">{preco}</p>
      <div className="p-2 m-auto">
        <Button>Ver mais</Button>
      </div>
    </div>
  )
}