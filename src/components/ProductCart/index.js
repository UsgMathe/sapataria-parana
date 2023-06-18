import { useEffect, useState } from "react"
import Button from "../Button"


export default function ProductCart({ sapato, addToCart, removeFromCart, carrinho }) {

  const [verMais, setVerMais] = useState(false)

  return (
    <>
      <div className="flex gap-4 rounded-lg h-36 bg-slate-100">
        <img src={sapato.imagem}
          className="rounded-lg object-cover w-1/3 h-full self-start transition-all duration-300"
        />
        <div className="flex flex-col w-full">
          <p className="m-2 line-clamp-1 text-center font-semibold text-gray-900">{sapato.nome}</p>
          <p className="line-clamp-3 text-justify font-normal px-2 text-gray-700">{sapato.descricao}</p>
        </div>
        <Button className="" onClick={_ => removeFromCart(sapato)}>Remover</Button>

      </div>

      {/* <div key={sapato.nome} className="flex flex-col rounded-lg border-2  bg-slate-100 hover:scale-95 hover:border-orange-500 transition-all duration-300">
        <div className={`h-2/3`}>
          <img src={sapato.imagem}
            className="m-auto rounded-lg object-cover w-full h-full  transition-all duration-300"
          />
        </div>
        <p className="m-2 line-clamp-1 text-center font-semibold text-gray-900">{sapato.nome}</p>
        <p className="line-clamp-1 text-justify font-normal px-2 text-gray-700">{sapato.descricao}</p>
        <p className="mt-2 text-center text-xl font-medium text-orange-500">{sapato.preco}</p>
        <div className="p-2 m-auto">
          <Button onClick={() => setVerMais(true)}>Ver mais</Button>
        </div>

      </div> */}
    </>
  )
}