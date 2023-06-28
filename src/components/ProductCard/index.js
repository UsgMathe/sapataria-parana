import { useEffect, useState } from "react"
import Button from "../Button"
import {BiCartAdd} from 'react-icons/bi'

export default function ProductCard({ sapato, addToCart, removeFromCart, carrinho }) {

  const [verMais, setVerMais] = useState(false)

  return (
    <>
      <div className={`${!verMais && "scale-0"} fixed top-0 bottom-0 right-0 left-0 flex items-center justify-center  m-0 p-10 backdrop-blur-[3px] bg-black/40 z-10`} onClick={() => setVerMais(false)}>

        <div className={`w-full h-full sm:h-4/5 md:h-3/5 max-w-xl rounded-lg ${verMais ? 'scale-100' : 'scale-0'} transition-all duration-500 z-50 overflow-y-scroll no-scrollbar`} >
          <img className="absolute right-0 m-4 w-10 cursor-pointer z-50 " onClick={() => setVerMais(false)} src="/images/cross.png" alt="fechar" />
          <div key={sapato.nome} className="flex flex-col justify-center items-center rounded-2xl border-2 w-full  bg-slate-100  transition-all duration-300 px-10" >
            <div className={`h-1/2 mt-16 `}>

              <img src={sapato.imagem}
                className="m-auto max-w-xs px-10 transition-all duration-300"
              />
            </div>
            <div className="w-full h-1/3">
              <p className="my-4 text-2xl text-center font-semibold text-gray-900">{sapato.nome}</p>
              <p className="my-2 font-normal text-justify overflow-y-scroll line-clamp-4 scroll-m-0 text-gray-700">{sapato.descricao}</p>
              <p className="my-6 text-center text-4xl font-medium text-orange-500">R${sapato.preco}</p>
            </div>
            <div className="p-2 m-auto mb-4" >
              {
                !carrinho ?
                  <Button icon={<BiCartAdd/>} onClick={() => {
                    addToCart(sapato)
                    setVerMais(false)
                  }}>Carrinho</Button>
                  :
                  <Button onClick={() => {
                    removeFromCart(sapato)
                    setVerMais(false)
                  }}>Remover</Button>
              }
            </div>
          </div>
        </div>
      </div>
      <div key={sapato.nome} className="flex flex-col rounded-lg border-2  bg-slate-100 hover:scale-95 hover:border-orange-500 transition-all duration-300">
        <div className={`h-2/3 w-full`}>
          <img src={sapato.imagem}
            className="m-auto rounded-lg object-cover  transition-all duration-300"
          />
        </div>
        <p className="m-2 text-center font-semibold text-gray-900">{sapato.nome}</p>
        <p className="mt-2 text-center text-xl font-medium text-orange-500">R${sapato.preco}</p>
        <div className="p-2 m-auto">
          <Button icon={<BiCartAdd/>} onClick={() => {
            addToCart(sapato)
            setVerMais(false)
          }}>Carrinho</Button>
          <Button onClick={() => setVerMais(true)}>Ver mais</Button>
        </div>

      </div>
    </>
  )
}