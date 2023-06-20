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
    </>
  )
}