import { useEffect, useState } from "react"
import Button from "../Button"

import { BiTrash } from 'react-icons/bi'


export default function ProductCart({ item_carrinho, addItem, decItem, removeFromCart }) {

  const [verMais, setVerMais] = useState(false)
  const [item, setItem] = useState({
    nome: item_carrinho.nome,
    descricao: item_carrinho.descricao,
    imagem: item_carrinho.imagem,
    qntd: item_carrinho.qntd,
    preco: item_carrinho.preco
  })

  useEffect(() => {
    setItem({
      nome: item_carrinho.nome,
      descricao: item_carrinho.descricao,
      imagem: item_carrinho.imagem,
      qntd: item_carrinho.qntd,
      preco: item_carrinho.preco
    })
    console.log(item.qntd)
  }, [item_carrinho])

  return (
    <div className="flex w-full md:w-3/4 max-w-5xl ">
      <div className="flex w-full gap-4 rounded-lg bg-slate-100">
        <div className="w-1/3">
          <img src={item.imagem}
            className="rounded-lg object-cover w-full h-full self-start transition-all duration-300"
          />
        </div>
        <div className="flex flex-col w-full">
          <p className="m-2 line-clamp-1 text-center font-semibold text-gray-900">{item.nome}</p>
          <p className="line-clamp-3 text-justify font-normal px-2 text-gray-700">{item.descricao}</p>
          <p className="p-2 text-2xl text-black">R${item.preco}</p>
          <div className="flex items-center gap-6 justify-around">
            <button className="px-4 rounded-md text-2xl font-bold bg-orange-500" onClick={_ => decItem(item_carrinho)}>
              -
            </button>
            <p className="p-2 text-black">{item.qntd}</p>
            <button className="px-4 rounded-md text-2xl font-bold bg-orange-500" onClick={_ => addItem(item_carrinho)}>
              +
            </button>
            {/* <Button className="w-10" onClick={_ => removeFromCart(item_carrinho)}>-</Button> */}
            <Button icon={<BiTrash />} className="" onClick={_ => removeFromCart(item_carrinho)} />
          </div>
        </div>
        {/* <div className="w-1/3"> */}


        {/* </div> */}

      </div>
    </div>
  )
}