'use client'

import { useEffect, useState } from "react"
import Button from "../Button"

import { BiTrash } from 'react-icons/bi'


export default function ProductCart({ itemCarrinho, itemInicial, addItem, decItem, removeFromCart }) {

  const [item, setItem] = useState(itemInicial)

  useEffect(() => {
    setItem(itemCarrinho)
  }, [itemCarrinho])

  return (
    <div className="flex flex-col sm:flex-row w-full sm:w-3/4 max-w-5xl ">
      <div className="flex flex-col sm:flex-row w-full gap-4 rounded-lg bg-slate-100 p-4">
        <div className="w-full h-40 sm:w-1/3 p-4">
          <img src={item.imagem}
            className="rounded-lg object-cover w-full h-full self-start transition-all duration-300"
          />
        </div>
        <div className="flex flex-col w-2/3 m-auto">
          <p className="m-2 line-clamp-1 text-center font-semibold text-gray-900">{item.nome}</p>
          <p className="line-clamp-3 text-justify font-normal px-2 text-gray-700">{item.descricao}</p>
          <p className="p-2 text-2xl text-black">R${item.preco}</p>
          <div className="flex items-center gap-6 justify-around">
            <button className="px-4 rounded-md text-2xl font-bold bg-orange-500" onClick={_ => decItem(itemInicial)}>
              -
            </button>
            <p className="p-2 text-black">{item.qntd}</p>
            <button className="px-4 rounded-md text-2xl font-bold bg-orange-500" onClick={_ => addItem(itemInicial)}>
              +
            </button>
            <Button icon={<BiTrash />} className="" onClick={_ => removeFromCart(itemInicial)} />
          </div>
        </div>
      </div>
    </div>
  )
}