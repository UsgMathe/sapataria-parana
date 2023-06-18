import { useEffect, useState } from "react"
import Button from "../Button"


export default function ProductCard({ sapato, addToCart, removeFromCart, carrinho }) {

  const [verMais, setVerMais] = useState(false)

  return (
    <>

      <div className={`${!verMais && "scale-0"} fixed top-0 bottom-0 right-0 left-0 flex items-center justify-center  m-0 p-10 backdrop-blur-[3px] bg-black/40 z-10`} >
        <div className={`w-full max-w-2xl h-full p-2 rounded-lg ${verMais ? 'scale-100' : 'scale-0'} transition-all duration-500 z-50 `} >
          <img className="absolute right-0 m-4 w-10 cursor-pointer" onClick={() => setVerMais(false)} src="/images/cross.png" alt="fechar" />
          <div key={sapato.nome} className="flex flex-col rounded-2xl border-2 w-full max-w-3xl h-full bg-slate-100  transition-all duration-300" >
            <div className={`p-6 mt-10`}>
              <img src={sapato.imagem}
                className="m-auto rounded-lg transition-all duration-300"
              />
            </div>
            <div className="w-full h-full">

              <p className="m-2 text-2xl text-center font-semibold text-gray-900">{sapato.nome}</p>
              <p className="my-2 font-normal text-justify overflow-y-scroll line-clamp-4 px-6 scroll-m-0 text-gray-700">{sapato.descricao}</p>
              <p className="my-6 text-center text-4xl font-medium text-orange-500">{sapato.preco}</p>
            </div>
            <div className="p-2 m-auto mb-4" >
              {
                !carrinho ?
                  <Button icon={'/images/adicionar-ao-carrinho-de-compras.png'} onClick={() => {
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

      </div>
    </>
  )
}