import { useEffect, useState } from "react"
import Button from "../Button"


export default function ProductCart({ sapato, addToCart, removeFromCart, carrinho }) {

  const [verMais, setVerMais] = useState(false)

  return (
    <div className="flex w-full md:w-3/4 max-w-5xl h-36 bg-red-500">
      <div className="flex w-full gap-4 rounded-lg bg-slate-100">
        <div className="w-1/3">
          <img src={sapato.imagem}
            className="rounded-lg object-cover w-full h-full self-start transition-all duration-300"
          />
        </div>
        <div className="flex flex-col w-1/3">
          <p className="m-2 line-clamp-1 text-center font-semibold text-gray-900">{sapato.nome}</p>
          <p className="line-clamp-3 text-justify font-normal px-2 text-gray-700">{sapato.descricao}</p>
        </div>
        <div className="w-1/3">

          <Button className="" onClick={_ => removeFromCart(sapato)}>Remover</Button>
        </div>

      </div>
    </div>
  )
}